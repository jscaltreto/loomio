const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./angular/main.coffee'],
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.js', '.coffee', '.haml'],
    modules: [path.resolve(__dirname), path.resolve(__dirname, 'node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../public/client/webpack'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.haml$/,
        use: [{loader: path.resolve(__dirname, 'tasks/haml-loader.js')}]
       },
      { test: /\.coffee$/,
        use: [ {
                 loader: 'coffee-loader',
                 options: { transpile: { presets: ['@babel/env'] }}
               } ]}]
  }
};