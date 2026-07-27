import { PermissionConfig } from '../../interfaces/types';
import { permissionConfigValidate } from '../../schema/permissionConfig';
import { ERROR_MESSAGE } from '../../utils/constants';
import { readPermissionsFile, writePermissionsFile } from './readPermissionsFile';

/**
 * Adds a new permission to `.igrpstudio/permissions.json`, or updates an
 * existing one in place when an entry with the same `id` is present. The
 * caller is authoritative on `id`: matches are compared by exact string,
 * and the write preserves the array order (updates land at the existing
 * index — no reshuffling), so hand edits and diff review stay predictable.
 *
 * Validation runs BEFORE the file is read so a bad input never touches
 * disk. AJV errors are thrown verbatim to match the rest of the engine's
 * `newPage` / `newComponent` conventions — Studio/CLI callers already
 * know how to format them for the user.
 */
export const savePermission = async (config: PermissionConfig, basePath: string): Promise<void> => {
  const isValid = permissionConfigValidate(config);
  if (!isValid && permissionConfigValidate.errors) throw permissionConfigValidate.errors;

  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const file = await readPermissionsFile(basePath);
  const index = file.permissions.findIndex((p) => p.id === config.id);

  if (index >= 0) {
    file.permissions[index] = config;
  } else {
    file.permissions.push(config);
  }

  await writePermissionsFile(basePath, file);
};
