const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isProduction = typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

module.exports = {
    entry: './src/main.js',
    target: 'web',
    mode,
    module: {
        rules: [{
            test: /\.worker.js$/,
            use: [
                { loader: require.resolve('worker-loader') }
            ],
        }]
    },
    resolve: {
        extensions: ['.js']
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
        new CopyWebpackPlugin([{
            from: 'src/style.css',
            to: path.resolve(__dirname, 'dist')
        }], {
            debug: 'info'
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            },
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
            },
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
