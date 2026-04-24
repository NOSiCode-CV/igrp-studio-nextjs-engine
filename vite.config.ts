import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: 'public',
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "vite-react-ts-button",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      // Keep prettier and @prettier/sync out of the bundle: prettier v3 is
      // ESM-only and its internals break when rollup inlines and minifies
      // them, producing runtime errors like "$$.join is not a function" at
      // module load. Bundle consumers resolve them from node_modules instead.
      external: ['fs-extra', 'path', 'prettier', '@prettier/sync'],
      output: {
        globals: {
          fs: 'fs',
          path: 'path',
          prettier: 'prettier',
          '@prettier/sync': 'prettierSync',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      path: 'path-browserify',
      '@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [dts()]
});        