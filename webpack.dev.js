const path = require('path');
const shared = require('./webpack.shared');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(shared, {
	mode: "development",
	output: {
		path: path.resolve(__dirname, 'dev'),
		filename: 'main.js'
	},
	devServer: {
		// contentBase: './src',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',		//3. injects styles into dom
					'css-loader',			//2. turns css into js
					'sass-loader'			//1. turns sass into css
				]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// filename: 'index.dev.html',
			template: './src/index.html'
		})
	],
})