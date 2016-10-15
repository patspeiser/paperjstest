var server = require('http').createServer(require('./app'));

server.listen(3000, function(){
	console.log('listening on 3000');
});

