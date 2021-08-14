const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        character: "./src/index.js",
        artifacts: "./src/artifacts.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page/character.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page/artifacts.html",
            filename: "artifacts.html"
        })
    ]
}