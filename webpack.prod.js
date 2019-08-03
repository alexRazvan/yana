const path = require('path');
const shared = require('./webpack.shared');
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(shared, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.min.[contentHash].js'
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsWebpackPlugin(),	//minifies css
			new TerserPlugin()										//minifies js
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].min.[contentHash].css'
		}),
		new HtmlWebpackPlugin({
			// filename: 'index.html',
			template: './src/index.html',
			minify: {															//minifies html
				removeAttributeQuotes: true,
				collapseWhitespace: true
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,		//3. extract css into files
					'css-loader',										//2. turns css into js
					'sass-loader'										//1. turns sass into css
				]
			},
		],
	},
})