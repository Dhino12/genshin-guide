/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        artifacts: './src/artifacts.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
            ],
        },
        {
            test: /\.html$/i,
            use: ['html-loader'],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/page/character.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/page/artifacts.html',
            filename: 'artifacts.html',
        }),
    ],
};
