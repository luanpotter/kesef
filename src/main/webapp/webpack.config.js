module.exports = {
    entry: './main.jsx',
    output: {
        path: './',
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
        }
      ]
    }
};
