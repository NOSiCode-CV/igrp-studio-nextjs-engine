import fs from 'fs-extra';
import path from 'path';
import { PermissionConfig, PermissionsFile } from '../../interfaces/types';
import { DIRECTORIES } from '../../utils/constants';

/**
 * Resolves the absolute path of `.igrpstudio/permissions.json` inside the
 * target project. Used by every read/write in this module so the layout is
 * defined in exactly one place.
 */
export const getPermissionsFilePath = (basePath: string): string =>
  path.join(basePath, DIRECTORIES.IGRPSTUDIO_PERMISSIONS_FILE);

/**
 * Loads the on-disk permissions catalog. Missing / empty file → returns an
 * empty catalog rather than throwing so first-run save flows can call this
 * without a probe step. A file that exists but is malformed (invalid JSON,
 * wrong top-level shape) IS an error and propagates — silently swallowing
 * would let a Studio bug corrupt the catalog and never surface.
 *
 * The function normalizes to `{ permissions: [] }` if the file only has
 * `{}` or the array field is missing — this keeps the caller's read /
 * modify / write loop trivial.
 */
export const readPermissionsFile = async (basePath: string): Promise<PermissionsFile> => {
  const filePath = getPermissionsFilePath(basePath);
  if (!(await fs.pathExists(filePath))) {
    return { permissions: [] };
  }
  const raw = await fs.readFile(filePath, 'utf-8');
  const trimmed = raw.trim();
  if (trimmed === '') return { permissions: [] };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error(
      `Permissions file at '${filePath}' is not valid JSON: ${(e as Error).message}`,
    );
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(
      `Permissions file at '${filePath}' must be a JSON object with a 'permissions' array.`,
    );
  }
  const permissions = (parsed as { permissions?: unknown }).permissions;
  if (permissions !== undefined && !Array.isArray(permissions)) {
    throw new Error(
      `Permissions file at '${filePath}' has a 'permissions' field that is not an array.`,
    );
  }
  return { permissions: (permissions as PermissionConfig[] | undefined) ?? [] };
};

/**
 * Serializes the catalog back to disk. Creates `.igrpstudio/` if the caller
 * is running before the folder exists. Uses 2-space indent so hand edits /
 * diffs stay readable, and always ends with a trailing newline.
 */
export const writePermissionsFile = async (
  basePath: string,
  file: PermissionsFile,
): Promise<void> => {
  const filePath = getPermissionsFilePath(basePath);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const body = JSON.stringify(file, null, 2) + '\n';
  await fs.writeFile(filePath, body, 'utf-8');
};
