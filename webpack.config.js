const path = require('path');


module.exports = {
    entry: ['babel-polyfill','./Source/JS/index.js'],
    output:{
        filename:'../Distribution/JS/bundle.js',
        path:path.resolve(__dirname, 'Distribution'),
    },
    devServer:{
        contentBase : './Source'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}