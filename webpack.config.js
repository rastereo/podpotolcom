const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    index: './src/pages/index.js',
    price: './src/pages/price.js',
    contacts: './src/pages/contacts.js',
    loftBedAdult: './src/pages/loft-bed-adult.js',
    loftBedChildren: './src/pages/loft-bed-children.js',
    bunkBed: './src/pages/bunk-bed.js',
    tables: './src/pages/tables.js',
    other: './src/pages/other.js',
    notFound: './src/pages/404.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
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
      test: /\.(jpe?g|png|gif|svg)$/i,
      type: "asset",
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
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/images/logo-podpotolcom.svg', // svg works too!
      mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
      devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
      prefix: 'images/favicons/',
      favicons: {
        appName: 'Под потолком',
        appDescription: 'Кровати ручной работы: высокое качество и надёжность',
        developerName: 'rastereo',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
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
    new HtmlWebpackPlugin({
      template: './src/loft-bed-adult.html',
      filename: 'loft-bed-adult.html',
      chunks: ['loftBedAdult']
    }),
    new HtmlWebpackPlugin({
      template: './src/loft-bed-children.html',
      filename: 'loft-bed-children.html',
      chunks: ['loftBedChildren']
    }),
    new HtmlWebpackPlugin({
      template: './src/bunk-bed.html',
      filename: 'bunk-bed.html',
      chunks: ['bunkBed']
    }),
    new HtmlWebpackPlugin({
      template: './src/tables.html',
      filename: 'tables.html',
      chunks: ['tables']
    }),
    new HtmlWebpackPlugin({
      template: './src/other.html',
      filename: 'other.html',
      chunks: ['other']
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
      chunks: ['notFound']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
}
