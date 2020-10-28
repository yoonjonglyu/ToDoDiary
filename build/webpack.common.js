const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry : {
    },
    output : {
        path : commonPaths.outputPath,
        publicPath : '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                exclude : /node_modules/,
                use : [
                    {
                        loader: 'ts-loader',
                        options: {
                          transpileOnly: true
                        }
                      }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'public/index.html',
            //favicon : 'public/favicon.ico'
        }),
    ]
}

module.exports = config;