import { merge } from 'webpack-merge';
import common from './webpack.common.ts';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge(common, {
  mode: 'development',
  plugins: [
    new Dotenv({
      path: './env-submodule/.env.dev',
    }),
  ],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 5001,
    hot: true,
  },
});

export default config;
