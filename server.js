var webpack=require('webpack');
var webpackDevMiddleware=require('webpack-dev-middleware')
var webpackHotMiddleware=require('webpack-hot-middleware')
var config=require('./webpack.hot.config.js')

var app=new (require('express'))();
var port=1234;
var host='0.0.0.0';

var compiler=webpack(config)

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler))

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})

app.get('/firebase-messaging-sw.js', (req, res) => {
	res.sendFile(__dirname + '/firebase-messaging-sw.js')
})
app.get('/fb.js', (req, res) => {
	res.sendFile(__dirname + '/components/fb.js')
})
app.get('/firebase-logo.png', (req, res) => {
	res.sendFile(__dirname + '/simple/firebase-logo.png')
})
// app.get('/manifest.json', (req, res) => {
// 	res.sendFile(__dirname + '/manifest.json')
// })
app.listen(port, host, function(error){
	if(error){
		console.error(error)
	}
	else{
		console.info('plz open http://%s:%s/', host, port)
	}
})


