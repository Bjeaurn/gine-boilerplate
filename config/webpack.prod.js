var webpackConfig = require('./webpack.common.js');

var myProdConfig = webpackConfig;
myProdConfig.output.filename = '[name].[hash].js';

myProdConfig.plugins = myProdConfig.plugins.concat(
    new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[hash].js' }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: true
    }
    }),
    new webpack.NamedModulesPlugin()
);

return myProdConfig;
