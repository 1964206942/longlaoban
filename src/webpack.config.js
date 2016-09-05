var HtmlWebpackPlugin = require("html-wenpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./main.html"
        }),
        new ExtractTextPlugin("bundle.css")
    ],
    entry: {
        index: "./main.js"
    },
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
        loaders[{
            test: /\.css/,
            loader: ExtractTextPlug.extreact
        }]
    }
}