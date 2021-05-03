const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html"
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
         
            use: ["html-loader"]
          }, 
          {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "imgs"
              }
            }
          }
        ],
      },
}