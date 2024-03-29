const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        main: "./src/test/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vegtex.[chunkhash].js",
    },
    devServer: {
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ 
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                exclude: /node_modules/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/test/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'vegtex.css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(),
    ]
};
