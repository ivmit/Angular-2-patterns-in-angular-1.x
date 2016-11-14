var path = require('path'),
    isProduction = (process.env.NODE_ENV == 'production'),
    webpack = require('webpack'),
    componentHotLoader = require.resolve('../loaders/component-loader'),
    serviceHotLoader = require.resolve('../loaders/service-loader'),
    jadeHotLoader = require.resolve('../loaders/jade-loader');

var UglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

if(isProduction){
    module.exports.plugins.push(UglifyJSPlugin)
}

if(!isProduction){
    module.exports.preLoaders.push(
        {
            test: /\.component\.js$/,
            loader: componentHotLoader,
            exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]
        },
        {
            test: /\.service\.js$/,
            loader: serviceHotLoader,
            exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]
        }
    );
    module.exports.postLoaders.push(
        {
            test: /\.html$/,
            loader: jadeHotLoader
        }
    );
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
                loaders: ['angular-hot', 'ng-annotate', 'babel?presets[]=es2015']
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