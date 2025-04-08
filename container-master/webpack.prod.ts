import { merge } from 'webpack-merge';
import common from './webpack.common.ts';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';

const config: Configuration = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './env-submodule/.env.prod',
    }),
  ],
  devtool: 'hidden-source-map',
});

export default config;
