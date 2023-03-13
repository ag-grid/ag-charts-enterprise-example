const path = require('path');

module.exports = {
    mode: 'development',
    entry: './tools/tmp-bundle.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
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
    },
    output: {
        library: {
            name: 'window',
            type: 'assign-properties',
        },
        filename: 'ag-charts-enterprise-all.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
};
