const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

const port = 3100

const config = {
	entry: {
		app: './src/index.js',
		vendor: Object.keys(pkg.dependencies)
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'js/[name].js',
		publicPath: '/'
	},
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src/'),
		},
		extensions: ['.js', '.less']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'babel-preset-env',
							'babel-preset-react',
							'babel-preset-stage-0'
						]
					}
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers:[
										'> 1%',
										'last 2 versions'
									]
								})
							],
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			inject: true,
			xhtml: true,
			minify: {
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				xhtml: true
			},
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			PropTypes: 'prop-types',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/app.css'
		}),
		new OptimizeCssnanoPlugin({
			cssnanoOptions: {
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						}
					}
				],
			},
		}),
	]
}

if (process.env.NODE_ENV === 'development') {
	config.devServer = {
		contentBase: './public',
		clientLogLevel: 'info',
		hot: true,
		port
	}
}

module.exports = config
