  const path = require('path');
  const CopyPlugin = require('copy-webpack-plugin');

  module.exports = {
    entry: {
      main: "./src/main.js"
    },
    mode: "development",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: '/'
    },
    /** devServer - setting for server */
    devServer: {
      contentBase: "dist",
      /** this means everything get served in dist folder */
      overlay: true

    },
    module: {
      /** rules - these rules the webpack will use when encounter various file type, rules takes an object of 'test' will take regular expression, for file type you wnnaa target, it also take use array param, where you specify your loader */
      rules: [{
          test: /\.css$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },

        
        {
          test: /\.html$/,
          use: [
            {
              loader: 'file-loader',/** just for file name or convention */          
              options: {
                name: "[name].html"
              }
            },
            {
              loader: 'extract-loader',/** tells webpack this want to be a seperate file and not included in main bundle js */ 
            },
            {
              loader: 'html-loader'/** does the linting */ ,
              options: {
                attrs: ["img:src", "link:href"]/**for loading image in html */
                
              }
            }


        ]
        },

        {
          test: /\.jpg$/,
          use: [
            { loader: "file-loader",
              options: {
                name: "images/[name]-[hash:8].[ext]",
                esModule: false
              },
              
            }
          ]
        },
        
      ]
    },

    plugins: [
      new CopyPlugin([
        
      ]),
    ]

  }