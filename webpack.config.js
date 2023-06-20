const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        // hot: true,
    },
    stats: 'errors-warnings',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: { loader: 'ts-loader', options: { projectReferences: true } },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'ag-charts-community': path.resolve(__dirname, 'node_modules/ag-charts-community/src/main.ts'),
            'ag-charts-enterprise': path.resolve(__dirname, 'node_modules/ag-charts-enterprise/src/main.ts'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/assets/basic.html',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
};
