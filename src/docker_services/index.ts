import {
  DockerContainer, DockerServiceRegisterConfig, DockerServiceRegistrationConfig,
} from '../interfaces/types';
import { renderTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from '../utils/constants';
import { replaceTemplate } from '../utils/helpers';

export type DockerService = {
  properties: Record<string, any>;
  propertiesMapping: Record<string, any>;
  custom?: string;
  defaultName: string;
  templatePath?: string;
  renderer: ((dockerService: DockerContainer, element?: DockerService, templatePath?: string) => (dockerService: DockerContainer) => string);

  loadDefaultName:(name: string) => void;
  loadCustom:(custom: string) => void;
  loadTemplatePath:(templatePath?: string) => void;
  getProperties: (properties: Record<string, any>) => void;
  getPropertiesMapping: (mapping: Record<string, any>) => void;

  setRenderer: (fn: ((dockerService: DockerContainer, element?: DockerService, templatePath?: string) => (dockerService: DockerContainer) => string)) => void;

  render: (context: DockerContainer, dockerService: DockerService) => string;
};

function initDockerService(): DockerService {
  return {
    properties: {},
    propertiesMapping: {},
    custom: undefined,
    defaultName: '',
    templatePath: undefined,
    renderer: () => () => "",

    loadDefaultName(name: string) {
      this.defaultName = name
    },

    loadCustom(custom: string) {
      this.custom = custom
    },

    loadTemplatePath(path?: string) {
      this.templatePath = path
    },

    getProperties(properties) {
      Object.assign(this.properties, properties);
    },

    getPropertiesMapping(mapping) {
      Object.assign(this.propertiesMapping, mapping);
    },

    setRenderer(renderer) {
      this.renderer = renderer
    },

    render(context: DockerContainer, dockerService: DockerService) {
      if (this.renderer) {
        return this.renderer(context, dockerService)(context);
      }
      throw new Error("No renderer function defined");
    }
  };
}

export let registry: Record<string, DockerService> = {};

export function register(name: string, registerFn: (dockerService: DockerService) => void) {
  const dockerServiceInstance: DockerService = initDockerService();
  registerFn(dockerServiceInstance);
  registry[name] = dockerServiceInstance;
}

export function getDockerService(name: string): DockerService {
  return registry[name];
}

function dockerServiceAsObject(key: string, value: DockerService): DockerServiceRegisterConfig {
  return {
    name: key,
    custom: value.custom,
    properties: value.properties,
    propertiesMapping: {},
    renderer: value.renderer.name.includes('default')? 'default' : value.renderer.name.includes('hbs')? 'hbs' : 'default',
    templatePath: value.templatePath
  }
}

const hiddenDockerServices: string [] = [];

export function dockerRegistryAsObject(): DockerServiceRegistrationConfig {
  const dockerServices: DockerServiceRegisterConfig[] = Object.entries(registry)
    .filter(([key, _]) => !(hiddenDockerServices.includes(key)))
    .map(([key, value]) => {
      return dockerServiceAsObject(key, value)
    });

  return { services: dockerServices }
}

export function defaultRenderer(
  dockerService: DockerContainer,
  element?: DockerService
): () => Promise<string> {
  const name = dockerService.container_name ?? element?.defaultName ?? "unknown";

  if (!element) {
    return () => renderTemplate(TEMPLATES.UNREGISTERED_SERVICE, { name });
  }

  return async () =>
    await renderTemplate(TEMPLATES.DEFAULT_DOCKER_SERVICE, {
      resourceConfig: dockerService,
    });
}

export function customRenderer(
  dockerService: DockerContainer,
  element?: DockerService
): () => Promise<string> {
  if (!element) {
    return async () =>
      await renderTemplate(TEMPLATES.UNREGISTERED_SERVICE, {
        name: dockerService.container_name,
      });
  }

  return async () => element.custom ?? "";
}

export async function hbsRenderer(
  dockerService: DockerContainer,
  element?: DockerService
): Promise<(dockerService: DockerContainer) => Promise<string>> {
  const name = dockerService.container_name ?? element?.defaultName;
  if (!name) throw new Error("No service name");

  return async () =>
    await renderTemplate(
      element?.templatePath
        ? element.templatePath
        : replaceTemplate(TEMPLATES.DOCKER_SERVICE, { name }),
      {
        resourceConfig: dockerService,
      }
    );
}