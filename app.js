var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var models = require('./models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', (req, res, next) => {
    // CORS headers
    res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

models.sequelize
    .sync()
    .then(function() {
        console.log('Tables Synced');
        models.roles.upsert({ name: 'Administrator' })
            .then((adm) => console.log(adm))
            .catch((e) => console.log(e));
        models.users.upsert({ id: 1, firstName: 'HRM', lastName: 'Manager', roleId: 1 })
            .then((adm) => console.log(adm))
            .catch((e) => console.log(e));
    }).catch(function(error) {
        console.log('Tables not Created', error);
    });



module.exports = app;