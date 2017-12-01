var webpack = require("webpack");
var webpackConfig = require("./webpack.common.js");
// var entryFile = path.join(__dirname, '/src/index.tsx')
var entryFile = "./src/index.ts";
var conf = {
  entry: ["webpack-hot-middleware/client", entryFile],
};

module.exports = function() {
    var myDevConfig = webpackConfig;
    myDevConfig.devtool = "inline-source-map";

    myDevConfig.entry = conf.entry;
    myDevConfig.devtool = "source-map",

    myDevConfig.devServer = {
        contentBase: "./dist",
        hot: true,
    };

    myDevConfig.plugins = myDevConfig.plugins.concat(
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.js" }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );

    return myDevConfig;
};
