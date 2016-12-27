var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib', 'tinyajax.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'tinyajax.js',
    library: 'tinyajax',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap:true})
  ]
};
