const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const CopyPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
	mode: 'development',
	// Enable sourcemaps for debugging webpack's output.
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.js'],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		},
	},
	entry: './src/index.js',
	output: {
		path: path.resolve('public'),
		filename: '[name].js',
		pathinfo: true
	},
	devtool: false,
	stats: {
		warnings: false
	},
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(tsx|js|ts)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(css|less)?$/,
				include: APP_DIR,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: (loader) => [
								require('autoprefixer'),
								require('tailwindcss')
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		// new ForkTsCheckerWebpackPlugin(),
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map',
			exclude: /(vendor|polyfills|worker)\.js/,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	]
};
