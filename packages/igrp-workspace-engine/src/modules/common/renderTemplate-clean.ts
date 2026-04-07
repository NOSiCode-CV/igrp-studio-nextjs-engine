import path from 'path';
import fs from 'fs-extra';

/**
 * Simple template renderer for workspace engine
 */
export const renderTemplate = async (templateName: string, context: any): Promise<string> => {
  const templatePath = path.join(__dirname, '../../public/templates', templateName);
  const templateContent = await fs.readFile(templatePath, 'utf-8');

  // Simple template replacement
  let result = templateContent;
  if (context && typeof context === 'object') {
    Object.keys(context).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, context[key]);
    });
  }

  return result;
};
