const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@helpers": path.resolve(__dirname, 'src/helpers'),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@src": path.resolve(__dirname, "src"),
        "@templates": path.resolve(__dirname, "src/templates"),
      }
    }
  });
};
