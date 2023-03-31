const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/pages/index.js',
    price: './src/pages/price.js',
    contacts: './src/pages/contacts.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: "images/[name].[hash][ext]"
        },
      },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: "fonts/[name].[hash][ext]"
          },

        },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/price.html',
      filename: 'price.html',
      chunks: ['price']
    }),
    new HtmlWebpackPlugin({
      template: './src/contacts.html',
      filename: 'contacts.html',
      chunks: ['contacts']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}
