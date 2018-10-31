// This library allows us to combine paths easily
const path = require('path');
module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devServer: {
   contentBase: './src',
   publicPath: '/output',
   historyApiFallback : true
},
   module: {
      rules: [
         {
             test: /\.jsx?$/,
             exclude: /(node_modules|bower_compontents)/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   }
};
