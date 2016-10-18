module.exports = {
    entry: './jsx/main.jsx',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    module : {
      loaders : [
        {
          test : /\.jsx?$/,
          loader: 'babel-loader',
          query: {
               presets: ['es2015']
          }
        },
        {
          test: /\.png$/,
          loader: 'file?name=dist/[path][name].[hash].[ext]'
        }
      ]
    }
};
