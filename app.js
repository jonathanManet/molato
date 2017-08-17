var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var ejs = require('ejs');


var app = express();

//MES CONTROLLERS
var articlesCtrl = require('./controllers/articlesCtrl');
var defaultCtrl = require('./controllers/defaultCtrl');
var usersCtrl = require('./controllers/usersCtrl');
var usersFormCtrl = require('./controllers/usersFormCtrl')
var articlesFormCtrl= require('./controllers/articlesFormCtrl')
// view engine setup
app.set('view engine', 'ejs');

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));



//MES ROUTE
app.get('/', defaultCtrl.accueilConstructor);

//ROUTE USERS
app.get('/admin',usersCtrl.adminPageConstructor);

app.get('/admin/client',usersCtrl.clientPageConstructor);
app.get('/admin/client_saver',usersFormCtrl.usersFormPage);
app.post('/admin/client',usersFormCtrl.getUser);
app.delete('/admin/client/:id',usersCtrl.supUserCtrl);

app.get('/admin/client_modif/:id',usersCtrl.modiPage);
app.put('/admin/client/:id',usersCtrl.saveModifPage);


//ROUTE ARTICLES
app.get('/admin/article',articlesCtrl.articlePageConstructor);
app.get('/admin/article_saver',articlesFormCtrl.articlesFormPage);
app.post('/admin/article',articlesFormCtrl.getArticle);
app.delete('/admin/article/:id',articlesCtrl.supArticleCtrl);

app.get('/admin/article_modif/:id',articlesCtrl.modiPageArticle);
app.put('/admin/article/:id',articlesCtrl.saveModifPageArticles);

app.listen(3000, function () {
    console.log("Congrats you are connected!The app is running on http://localhost:3000")
});