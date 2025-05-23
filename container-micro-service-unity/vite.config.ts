import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import tsconfigPaths from 'vite-tsconfig-paths';

export default () => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      topLevelAwait(),
      svgr(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        entryRoot: 'lib',
        include: ['lib'],
        exclude: ['node_modules', 'dist', '**/*.test.ts*', './lib/vite-env.d.ts'],
        rollupTypes: true,
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'lib'),
        },
        {
          find: '@assets',
          replacement: path.resolve(__dirname, 'lib/assets'),
        },
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'lib/components'),
        },
        {
          find: '@context',
          replacement: path.resolve(__dirname, 'lib/context'),
        },
        {
          find: '@features',
          replacement: path.resolve(__dirname, 'lib/features'),
        },
        {
          find: '@hooks',
          replacement: path.resolve(__dirname, 'lib/hooks'),
        },
        {
          find: '@pages',
          replacement: path.resolve(__dirname, 'lib/pages'),
        },
        {
          find: '@services',
          replacement: path.resolve(__dirname, 'lib/services'),
        },
        {
          find: '@store',
          replacement: path.resolve(__dirname, 'lib/store'),
        },
        {
          find: '@styles',
          replacement: path.resolve(__dirname, 'lib/styles'),
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, 'lib/utils'),
        },
      ],
      extensions: [],
    },
    define: {
      __APP_VERSION__: JSON.stringify('0.0.1'),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'lib/index.ts'),
        name: 'container-micro-service-unity',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          assetFileNames: 'index.[ext]',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  });
};
