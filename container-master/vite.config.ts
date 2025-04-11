import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath, URL } from 'node:url';

export default ({ mode }: { mode: string }) => {
  const env = {
    ...process.env,
    ...loadEnv(mode, resolve(process.cwd(), './config'), ''),
  };
  // const isDevelop = env.VITE_MODE === 'development';
  const SERVER_PORT: number = env.VITE_PORT;

  return defineConfig({
    envDir: './config/',
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // '@assets': resolve(__dirname, "./src"),
        // '@components': getAliasPath('./src/components'),
        // '@pages': getAliasPath('./src/pages'),
        // '@zustand': getAliasPath('./src/zustand'),
        // '@store': getAliasPath('./src/store'),
        // '@apis': getAliasPath('./src/apis'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    // root: './',
    // publicDir: '../public/',
    // base: env.VITE_BASE_PATH,
    build: {
      outDir: resolve(__dirname, './dist'),
      emptyOutDir: true,
      sourcemap: true,
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       react: ['react', 'react-dom'],
      //     },
      //     // assetFileNames: (name) => {
      //     //   if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
      //     //     return 'assets/images/[name]-[contexthash][extname]';
      //     //   }
      //     //   if (/\.css$/.test(name ?? '')) {
      //     //     return 'assets/css/[name]-[hash][extname]';
      //     //   }
      //     //   if (/\.(ttf|otf|woff|woff2|eot)$/.test(name ?? '')) {
      //     //     return 'assets/fonts/[name]-[hash][extname]';
      //     //   }
      //     //   return 'assets/[name]-[hash][extname]';
      //     // },
      //   },
      // },
    },
    // scss 전역 사용
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "./src/assets/styles/scss/main.scss";`,
    //     },
    //   },
    // },
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_VERSION),
      'process.env': env,
    },
    server: {
      host: env.VITE_HOST,
      port: SERVER_PORT,
      open: true,
      // proxy: {
      //   target: `${env.VITE_SERVER_URL}:8080`, // 환경 변수 사용
      // changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  });
};
