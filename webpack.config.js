module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    filename: './dist/script.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    }]
  }
};
