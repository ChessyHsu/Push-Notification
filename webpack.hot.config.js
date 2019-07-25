const path=require('path');
const webpack=require('webpack');
module.exports={
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry:{
		app:[
			'webpack-hot-middleware/client?path=http://localhost:1234/__webpack_hmr',
			'./components/app'
		]
	},
	output:{
		path:__dirname,
		filename:'[name].js',
		publicPath: 'http://localhost:1234/static/'
	},
	plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: ['babel-loader'],
				exclude: /node_modules/,
				include: __dirname
			}
		]
	}
};