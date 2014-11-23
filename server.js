var express = require('express'),
    app = express(),
    livereload = require('express-livereload');

//livereload(app, { });
app.use('/', express.static(__dirname + '/public'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/lib', express.static(__dirname + '/bower_components'));

var port = process.env.port || 3000,
    server = app.listen(port, function() {
        console.log('Listening on ' + port);
    });
