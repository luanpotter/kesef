var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './jsx/main.jsx',
    output: {
        path: '../webapp/',
        filename: 'bundle.js'
    },
    module : {
      loaders : [
        {
          test : /\.jsx?$/,
          loader: 'babel-loader',
          query: {
               presets: ['es2015', 'react']
          }
        },
        {
          test: /\.png$/,
          loader: 'file?name=[path][name].[hash].[ext]'
        }
      ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'index.html' }, { from: 'WEB-INF/', to: 'WEB-INF/' }])
    ]
};
