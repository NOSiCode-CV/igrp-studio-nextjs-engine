import fs from 'fs-extra';
import path from 'path';
import {
  buildComponentRegistry,
  type AppComponentEntry,
  type BuildComponentRegistryInput,
} from './buildComponentRegistry';
import { DIRECTORIES } from '../utils/constants';

export interface RegisterAppComponentsOptions {
  /** Forwarded to `buildComponentRegistry`. */
  currentPage?: string;
  /** Forwarded to `buildComponentRegistry`. */
  generatedPath?: string;
  /** Forwarded to `buildComponentRegistry`. */
  customComponentsPath?: string;
  /**
   * When `true` (default), reads `<basePath>/.igrpstudio/components/*.json`
   * off the filesystem and includes them as `appComponents`. Studio
   * Desktop hands these in from its FileTree watcher; the CLI and other
   * headless callers have no watcher, so the engine reads them here.
   * Set to `false` to disable and pass `appComponents` explicitly.
   */
  includeAppComponentsFromIgrpStudio?: boolean;
  /**
   * Explicit `appComponents` to include in addition to (or instead of,
   * with `includeAppComponentsFromIgrpStudio: false`) whatever gets
   * discovered from `.igrpstudio/components`. Studio Desktop would pass
   * its already-parsed watcher payload here.
   */
  appComponents?: AppComponentEntry[];
}

/**
 * Convenience wrapper for headless consumers (CLI, CI, scripts). Runs
 * the exact same pipeline the Studio renderer does today, without the
 * `window.engine.*` IPC hops or the FileTree watcher:
 *
 *   1. `loadAppExports(basePath)` — discover React components under
 *      `(myapp)/components/**` via `parseComponents`.
 *   2. Optionally read every `.igrpstudio/components/*.json` off disk
 *      and treat each as an `AppComponentEntry`. Off by default? No —
 *      on by default; the CLI's expected use case is "point me at a
 *      project root and register everything". Disable via
 *      `includeAppComponentsFromIgrpStudio: false` when the caller
 *      already has the parsed manifests in memory.
 *   3. Feed both to `buildComponentRegistry` → one array of
 *      `ComponentRegisterConfig`s.
 *   4. Call `registerComponents({ components })` on the engine.
 *
 * Idempotent modulo the underlying registry: calling it twice for the
 * same `basePath` just re-registers (same entries; `register` overwrites
 * by name). Combine with `resetComponents()` for per-project isolation
 * across sessions.
 *
 * Imports the engine surface (`loadAppExports`, `registerComponents`)
 * lazily at call time via dynamic `require` to avoid a circular import
 * between `helpers/*.ts` and the root `src/index.ts`.
 */
export async function registerAppComponents(
  basePath: string,
  opts: RegisterAppComponentsOptions = {},
): Promise<void> {
  // Lazy require sidesteps the circular: src/index.ts imports from ./helpers,
  // and ./helpers needs loadAppExports / registerComponents from src/index.ts.
  const engine = require('..');

  const customComponents = (await engine.loadAppExports(basePath)).components;

  const appComponents: AppComponentEntry[] = [];

  if (opts.includeAppComponentsFromIgrpStudio !== false) {
    const componentsDir = path.join(basePath, DIRECTORIES.IGRPSTUDIO_COMPONENTS);
    if (await fs.pathExists(componentsDir)) {
      const files = await fs.readdir(componentsDir);
      for (const file of files) {
        if (!file.endsWith('.json')) continue;
        const fullPath = path.join(componentsDir, file);
        try {
          const content = await fs.readJson(fullPath);
          appComponents.push({ content });
        } catch {
          // Malformed manifest — Studio surfaces this in its own UI; for
          // headless callers we prefer best-effort registration over
          // failing the whole pipeline. A single bad file shouldn't kill
          // the rest of the project's palette.
        }
      }
    }
  }

  if (opts.appComponents && opts.appComponents.length > 0) {
    appComponents.push(...opts.appComponents);
  }

  const registryInput: BuildComponentRegistryInput = {
    customComponents,
    appComponents,
    currentPage: opts.currentPage,
    generatedPath: opts.generatedPath,
    customComponentsPath: opts.customComponentsPath,
  };

  const components = buildComponentRegistry(registryInput);

  engine.registerComponents({ components });
}
