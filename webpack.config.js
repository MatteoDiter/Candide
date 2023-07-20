const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './client/index.tsx',

    mode: 'development',

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },

    devServer: {
      static: {
        directory: path.join(__dirname, './dist'),
      },
      proxy: {
        '/': 'http://localhost:3000',
        secure: false
      },
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],

    module: {
        rules: [
            // TSX
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: [
                 {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                 },
                 {
                    loader: 'ts-loader'
                 }
              ]
            },
            // JSX
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
            // SASS
            { 
              test: /\.(s(a|c)ss)$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // IMAGES
            {
              test: /\.png|svg|jpg|gif$/,
              use: ['file-loader'],
            },
        ]
    },

    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        fallback: {
          "path": require.resolve("path-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "fs": false // 'fs' can't be polyfilled, but it's unlikely you need it in the browser.
        }
    },
}