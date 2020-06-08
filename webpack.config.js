const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const fs = require('fs');



const isDev = process.env.NODE_ENV === "development"


module.exports = {

    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        timer: './AppStarter.js'
    },
    output:{
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
                filename: "[name].[hash].css"
            }
        )
    ],
    devServer: {
        port: 4200,
        hot: isDev
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loader: {
                        less: 'vue-style-loader!css-loader!less-loader'
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ],
    },
}