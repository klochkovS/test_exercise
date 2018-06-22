const path = require('path');

module.export = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: './dist/bundle.js',
    path: path.resolve('.'),
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'react', ['env', {
            modules: false,
          }],
        ],
      },
    }],
  },
};
