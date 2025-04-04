import * as yaml from "js-yaml";
import fs from 'fs-extra';
import path from 'path';
import { SRC_CONFIG_FILES } from '../../utils/constants';

export const saveWorkspaceComposeFile = async (parsedData: object, basePath: string) => {

  const igrpCompose = yaml.dump(parsedData);

  await fs.writeFile(path.join(basePath, SRC_CONFIG_FILES.IGRP_COMPOSE), igrpCompose, 'utf-8');

}