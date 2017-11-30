const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',    
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: {
        extensions: ['.ts', '.js']
      },
    plugins: [
        // Production only.
        // new webpack.optimize.UglifyJsPlugin(),

        // Dev only.
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()   
    ],
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' }
        ]
      }
};