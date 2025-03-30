const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
 
module.exports = merge(common, {
  mode: 'development',
  // <https://webpack.kr/configuration/devtool/#root>
  devtool: 'eval-source-map',
  // webpack-dev-server 설정입니다.
  devServer: {
    /*
      HTML5HistoryAPI를 사용하기 위해선 이 설정을 true로 하여야 합니다.
      React와 같은 SPA의 경우, HTML5HistoryAPI를 사용하여 라우트를 구현합니다.
      따라서 이 설정을 활성화 하지 않는 경우 라우트 에러가 나타날 수 있습니다.
    */
    historyApiFallback: true,
    port: 3000,
    hot: true, // Hot Module Replacement를 사용합니다.
  },
});