/**
 * Created by tommy on 2016/6/10.
 */

var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname,"app/main.js"),
    output: {
        path: path.resolve(__dirname,"public"),
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname,"node_modules") ,
                include: path.resolve(__dirname,"app"),
                loader: "style!css?modules"
            },
            {
                test:/\.json$/,
                loader:"json"
            },
            {
                test:/\.js$/,
                exclude: path.resolve(__dirname,"node_modules") ,
                include: path.resolve(__dirname,"app"),
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    devServer:{
        contentBase: path.resolve(__dirname,"public"),
        colors:true,
        historyApiFallback:true,
        inline:true,
        port:3000
    }
};