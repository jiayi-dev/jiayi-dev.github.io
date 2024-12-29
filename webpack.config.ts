const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                    globOptions:{
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/',
            },
            {
                directory: path.join(__dirname, 'public'),
                publicPath: '/',
            }
        ],
        open: true,
        hot: true,
        port: 8080,
        historyApiFallback: true,
    },
    mode: 'development',
};