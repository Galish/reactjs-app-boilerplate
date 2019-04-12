const path = require('path')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
							'babel-preset-react'
						]
					}
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
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
		})
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
