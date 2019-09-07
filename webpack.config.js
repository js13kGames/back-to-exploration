const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const isProduction = typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';
const optimization = isProduction && {
    minimizer: [
        new UglifyJsPlugin()
    ]
} || {};

module.exports = {
    entry: './src/main.ts',
    target: 'web',
    mode,
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool,
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            },
        })
    ],
    optimization,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
