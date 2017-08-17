var connexion = require('./configuration/mysqlConf');

//Ajouter les articles dans ma base de donnée

function postArticleServer(req){

    return connexion.then(function(done, err){
        if(err) throw err;
        var product_name = req.body.product_name;
        var product_categorie = req.body.product_categorie;
        var prix = req.body.prix;
        var image = req.body.image;
        return done.query("INSERT INTO article (nom,category,prix,image) VALUES(?,?,?,?)",[product_name,product_categorie,prix,image] );
        });
}



module.exports = {

    postArticleServer: postArticleServer
};