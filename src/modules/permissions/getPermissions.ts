import { PermissionConfig } from '../../interfaces/types';
import { ERROR_MESSAGE } from '../../utils/constants';
import { readPermissionsFile } from './readPermissionsFile';

/**
 * Returns the current permission catalog for a project. Missing file →
 * empty array (see `readPermissionsFile` for the rationale). Intended for
 * Studio/CLI list views, autocomplete pickers in the Rules drawer, and
 * pre-save "does this id already exist?" checks.
 *
 * The returned array is a shallow copy; mutating it does not affect the
 * on-disk file. Callers that want to persist changes must round-trip
 * through `savePermission` / `deletePermission`.
 */
export const getPermissions = async (basePath: string): Promise<PermissionConfig[]> => {
  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;
  const file = await readPermissionsFile(basePath);
  return [...file.permissions];
};
