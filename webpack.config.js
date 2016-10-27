var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        'vue-iscroll': path.join(__dirname, 'src/scroll.vue')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        library: 'vueIscroll',
        libraryTarget: 'umd',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}