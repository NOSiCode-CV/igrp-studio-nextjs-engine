import { ERROR_MESSAGE } from '../../utils/constants';
import { readPermissionsFile, writePermissionsFile } from './readPermissionsFile';

/**
 * Removes the permission entry whose `id` equals the argument. Throws when
 * no such entry exists — silent no-ops on delete would mask Studio bugs
 * that pass the wrong id (e.g. a stale UI state), and the caller can
 * always guard with `getPermissions()` first if they need permissive
 * behavior.
 */
export const deletePermission = async (id: string, basePath: string): Promise<void> => {
  if (!id || typeof id !== 'string') throw new Error("A non-empty 'id' string is required.");
  if (!basePath) throw ERROR_MESSAGE.INVALID_OUTPUT_PATH;

  const file = await readPermissionsFile(basePath);
  const index = file.permissions.findIndex((p) => p.id === id);

  if (index < 0) throw new Error(ERROR_MESSAGE.PERMISSION_NOT_FOUND(id));

  file.permissions.splice(index, 1);
  await writePermissionsFile(basePath, file);
};
