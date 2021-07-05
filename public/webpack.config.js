const path = require('path');


module.exports = {
    entry: ['babel-polyfill','./JS/index.js'],
    output:{
        filename:'./finalJS/JS/bundle.js',
        path:path.resolve(__dirname, 'fileJS'),
    },
    devServer:{
        contentBase : './public'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}