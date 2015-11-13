// var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'dist/act.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory=true"}
        ]
    }
};
