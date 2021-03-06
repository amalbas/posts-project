
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
    resolve:{
        alias:{
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
      module: { 
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: "text-loader"
                }
            }
        ]
      },
        plugins: [
        new ExtractTextPlugin('style.css')
        ]
    };