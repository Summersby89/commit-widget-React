const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill','./index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}