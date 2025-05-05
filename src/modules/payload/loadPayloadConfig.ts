/**
 * Dynamically imports the Payload configuration.
 *
 * @param {string} configPath - Absolute path to the Payload config file.
 * @returns {Promise<any>} The imported config object.
 */
export async function loadPayloadConfig(configPath: string): Promise<any> {
  const config = await import(configPath);
  return config.default;
}