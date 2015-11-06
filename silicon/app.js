/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var multer = require('multer');
var request = require('request');
var methodOverride = require('method-override');
var morgan = require('morgan');
var unirest = require('unirest');

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

var appEnv = cfenv.getAppEnv();
var server = app.listen(appEnv.port, function() {
  console.log('***********************************');
  console.log('listening:', appEnv.url);
  console.log('***********************************');
});

module.exports = server;

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

app.get('/', function(req, res){
  res.render('home');
});

app.get('/sms', function(req, res){
  res.render('sms');
});

app.get('/json', function(req, res){
  res.send({status: 'IBM'});
});

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

app.all('*', function(req, res){
    if(!req.query.proxy){
      return res.status(404).send();
    }

    /* CHANGE THIS LINE */
    var domain = 'http://ca-101-chyld-nodered.mybluemix.net';
    var o = {
      uri: req.query.url || domain + req.url,
      method: req.method,
      json: true,
    }

    if(req.method !== 'GET'){
      o.body = req.body;
    }

    console.log('request to NodeRED:', o);
    request(o, function(e, r, b){
      console.log('error from NodeRED:', e);
      console.log('status from NodeRED:', r.statusCode);
      console.log('response from NodeRED:', b);
      res.send(b);
    });
});

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
