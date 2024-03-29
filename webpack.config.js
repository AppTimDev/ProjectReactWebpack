const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const {config} = require("./config");

module.exports = (env) => {
    console.log('webpack.config:')
    //const isProduction = !!env.production;
    const isProduction = process.env.NODE_ENV === 'production'
    console.log(`isProduction; ${isProduction}`)

    const { version, public_url, api_url } = config
    console.log(config)

    return {
        entry: ['./src/index.js'],
        output: {
            path: path.join(__dirname, 'dest'),
            filename: 'bundle.[contenthash].js',
            publicPath: public_url,

            assetModuleFilename: 'images/[hash][ext]',
            clean: true
        },
        devServer: {
            port: 8080,
            static: path.join(__dirname, 'dest'),
            historyApiFallback: true
        },
        // devtool : isProduction ? 'source-map' :'inline-source-map',
        devtool: isProduction ? undefined : 'inline-source-map',
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
                patterns: [{
                    from: path.resolve(__dirname, './src/favicon.ico'),
                    to: path.resolve(__dirname, './dest')
                }]
            }),
            //define variables used in react
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(version),
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            })
        ],
    }
}