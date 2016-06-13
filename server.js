/**
 * Created by stevet on 07/06/2016.
 */
// Babel ES6/JSX Compiler
require('babel-register');

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Opportunity = require('./models/opportunity');

var config = require('./config');
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * POST /api/opportunity
 * Adds new Opportunity to the database.
 */
app.post('/api/opportunity', function(req, res, next) {
    var prospect = req.body.prospect;
    var description = req.body.description;

    async.waterfall([
        function(callback) {
            Opportunity.findOne({ prospect: prospect, description: description }, function(err, opportunity) {
                if (err) return next(err);

                if (opportunity) {
                    return res.status(409).send({ message: 'Opportunity is already in the database.' });
                }

                callback(err, prospect);
            });
        },
        function(prospect) {

                        var opportunity = new Opportunity({
                            prospect: prospect,
                            description: description
                        });

                        opportunity.save(function(err) {
                            if (err) return next(err);
                            res.send({ message: prospect + ' has been added successfully!' });
                        });
        }
    ]);
});

/**
 * GET /api/opportunities
 * Returns all Opportunities in the database.
 */
app.get('/api/opportunities', function(req, res, next) {
    Opportunity.find()
        .exec(function(err, opportunities) {
            if (err) return next(err);
            if (opportunities.length > 0) {
                return res.send(opportunities);
            }
        });
});





app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(app.get('port'), function() {
    console.log('Express server listening at ' + new Date().getHours() + ':' + new Date().getMinutes() + ' on port ' + app.get('port'));
});