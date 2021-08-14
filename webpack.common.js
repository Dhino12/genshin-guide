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
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/page/character.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/page/artifacts.html",
            filename: "artifacts.html",
            chunks: ["artifacts"]
        })
    ]
}