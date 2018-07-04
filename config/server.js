/* importar o módulo do framework express */

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.statis */

app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended :true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/*exportar o objeto app */
module.exports = app;