// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean dist before build
},
module: {
    rules: [
    {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // <-- important!
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
],
    mode: 'development',
};
