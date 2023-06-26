const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './client/index.js',

    output : {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, 'public'), // Serve static files from the 'public' directory
        host: 'localhost',
        port: 8080,
        // enable HMR on the devServer
        hot: true,
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000/',
                secure: false,
              },
          },
        historyApiFallback: true,
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
              use: ['style-loader','css-loader', 'sass-loader']
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
    },
}