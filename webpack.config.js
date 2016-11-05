const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  const ifDev = plugin => addPlugin(env.dev, plugin)
  const removeEmpty = array => array.filter(el => !!el)

  return {
    devtool: env.prod ? undefined : 'inline-source-map',

    entry: {
      app: removeEmpty([
        './src/app.js',
        ifDev('webpack-hot-middleware/client?reload=true')
      ]),
      vendor: [ './src/vendor.js' ]
    },

    output: {
      path: __dirname + '/dist',
      sourceMapFilename: '[name].map',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      loaders: [
        { test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel'
        },
        { test: /\.css$/, loader: [ 'style', 'css' ] },
        { test: /\.(eot|woff|ttf|svg|png|otf)$/, loader: 'url?limit=64' },
        { test: /\.json$/, loader: 'json' }
      ]
    },

    resolve: {
      extensions: ['.js'],
      modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, 'src/js')
      ]
    },

    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),

      ifProd(new webpack.optimize.DedupePlugin()),

      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
      })),

      ifDev(new webpack.HotModuleReplacementPlugin()),

      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"development"', },
      }),

      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: { screw_ie8: true, warnings: false },
      })),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body'
      })
    ]),

    node: {
      global: true,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  }
}
