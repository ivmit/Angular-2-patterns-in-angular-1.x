var path = require('path'),
    isProduction = (process.env.NODE_ENV == 'production'),
    webpack = require('webpack');

var UglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

if(isProduction){
    module.exports.plugins.push(UglifyJSPlugin)
}

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'app'), //using __dirname + '/app' breaks css loader and style loader for sass. weird af
    entry: './app.module.js',
    output:{
        path: __dirname + '/dist',
        filename: './bundle.js',
        publicPath: '/dist/'
    },
    module: {
        preLoaders:[],
        loaders:[
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ['ng-annotate', 'babel?presets[]=es2015']
            },
            {
                test: /\.html$/,
                loaders: ['raw']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'resolve-url']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer', 'resolve-url', 'sass?sourceMap']
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)$/,
                loaders: ['url']
            }
        ]
    },
    plugins: []
};