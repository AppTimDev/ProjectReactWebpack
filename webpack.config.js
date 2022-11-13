const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dest'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/react/',

        assetModuleFilename: 'images/[hash][ext]',
        clean: true
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, 'dest'),
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/i,
                issuer: /\.(js|jsx)$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
            // filename: '[name].[contenthash:6].css',
            filename: 'bundle.[contenthash:6].css',
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/favicon.ico'),
                    to: path.resolve(__dirname, './dest')
                }
            ]
        }),
    ],
}