const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

return module.exports = {
    entry: './src/index.ts',
    output: {
        publicPath: "/",        
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            watch: ['./src']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: "tslint-loader",
                options: {
                    emitErrors: false,
                    failOnHint: true,
                    typeCheck: true,
                    fix: false
                }
            },
            { test: /\.ts$/, loader: "awesome-typescript-loader", options: { transpileOnly: true } }
        ]
    },
};
