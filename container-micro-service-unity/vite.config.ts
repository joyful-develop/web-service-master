import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginHtmlEnv from 'vite-plugin-html-env';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';

export default () => {
  return defineConfig({
    envDir: './config/',
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        entryRoot: 'src',
        include: ['src'],
        exclude: ['node_modules', 'dist', '**/*.test.ts*', './src/vite-env.d.ts'],
      }),
      tsconfigPaths(),
      tailwindcss(),
      vitePluginHtmlEnv(),
      vitePluginHtmlEnv({ compiler: true }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: '@assets',
          replacement: path.resolve(__dirname, 'src/assets'),
        },
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: '@context',
          replacement: path.resolve(__dirname, 'src/context'),
        },
        {
          find: '@features',
          replacement: path.resolve(__dirname, 'src/features'),
        },
        {
          find: '@hooks',
          replacement: path.resolve(__dirname, 'src/hooks'),
        },
        {
          find: '@pages',
          replacement: path.resolve(__dirname, 'src/pages'),
        },
        {
          find: '@services',
          replacement: path.resolve(__dirname, 'src/services'),
        },
        {
          find: '@store',
          replacement: path.resolve(__dirname, 'src/store'),
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, 'src/utils'),
        },
      ],
      extensions: [],
    },
    define: {
      __APP_VERSION__: JSON.stringify('0.0.1'),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        name: 'container-micro-service-unity',
        formats: ['es', 'cjs'],
        fileName: (format) => `main.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          interop: 'compat',
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  });
};
