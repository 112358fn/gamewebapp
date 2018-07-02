const path = require('path');

module.exports = {
  entry: './project/frontend/src/App.js',
  output: {
    path: path.join(__dirname, 'project/frontend/static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'project/frontend/src'),
    historyApiFallback: true
  }
  };