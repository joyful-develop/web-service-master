const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  entry: './src/main.tsx',
  module: {
    rules: [
      // type: 'asset'을 지정해줌으로서, file-loader, url-loader, @svgr/webpack의 설치가 필요없어졌습니다.
      // <https://webpack.kr/guides/asset-modules/#general-asset-type>
      {
        test: /\\.(png|svg|jpe?g|gif|webp)$/i,
        type: 'asset',
        parser: {
          // maxSize의 용량값보다 작은 경우 인라인(Base64 형식으로 인코딩)으로, 그 이상일 경우 별도 파일로 분리합니다.
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4KiB를 기준으로 합니다.
          },
        },
        generator: {
          filename: 'assets/images/[name]_[contenthash:8][ext]',
        },
      },
      // esbuild-loader 세팅
      {
        test: /\\.(js|jsx|ts|tsx|mjs)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2020',
        },
      },
      // 스타일 관련 loader 세팅
      {
        test: /\\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // 절대 경로 세팅
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      'styled-system': path.resolve(__dirname, 'src/styled-system/'),
    },
  },
  // 번들링 세팅
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // webpack5의 기능으로, 빌드시마다 자동으로 dist의 파일을 삭제하고 새로 빌드합니다.
  },
  // 플러그인 세팅
  plugins: [
    // 번들링시 html 파일을 생성합니다.
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // esbuild-loader는 ts-loader와 다르게 컴파일시 타입 체킹이 되지 않습니다. 따라서 아래 플러그인을 통해서 체킹해줍니다.
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      },
    }),
    // 빌드 과정에서 환경변수를 로드합니다.
    new Dotenv(),
  ],
};