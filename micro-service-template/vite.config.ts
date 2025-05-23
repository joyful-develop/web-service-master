import path from 'path';

import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: { mode: string }) => {
  const env = {
    ...process.env,
    ...loadEnv(mode, path.resolve(process.cwd(), './config'), ''),
  };
  const SERVER_PORT: number = env.VITE_APP_PORT as unknown as number;

  return defineConfig({
    envDir: './config/',
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      topLevelAwait(),
      svgr(),
      federation({
        name: 'host-app',
        filename: 'remoteEntry.js',
        exposes: {
          './DashBoard': './src/pages/dashBoard/DashBoard.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
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
          find: '@styles',
          replacement: path.resolve(__dirname, 'src/styles'),
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, 'src/utils'),
        },
      ],
      extensions: [],
    },
    mode: env.VITE_APP_MODE,
    root: './',
    publicDir: './public/',
    base: env.VITE_APP_BASE_PATH,
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION),
    },
    build: {
      outDir: path.resolve(__dirname, './dist'),
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0] ?? '';
            const fileNames: string[] = fileName !== '' ? fileName.split('.') : [];
            let ext: string = fileNames.length > 0 ? fileNames[fileNames.length - 1] : '';
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              ext = 'images';
            } else if (/woff|woff2/i.test(ext)) {
              ext = 'fonts';
            }
            return `assets/${ext}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    server: {
      host: env.VITE_APP_HOST,
      port: SERVER_PORT,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          // secure: false,
          // ws: true,
          configure: (proxy) => {
            proxy.on('error', (err) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (_proxyReq, req) => {
              console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
        },
      },
    },
    preview: {
      host: env.VITE_APP_HOST,
      port: SERVER_PORT,
      open: true,
    },
  });
};
