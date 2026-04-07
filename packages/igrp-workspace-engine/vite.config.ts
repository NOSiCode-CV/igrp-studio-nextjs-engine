import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'IGRPWorkspaceEngine',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['fs-extra', 'path', 'handlebars', 'js-yaml', 'ajv'],
      output: {
        globals: {
          'fs-extra': 'fsExtra',
          'path': 'path',
          'handlebars': 'Handlebars',
          'js-yaml': 'yaml',
          'ajv': 'Ajv'
        }
      }
    }
  },
  plugins: [dts()],
  publicDir: 'public'
});
