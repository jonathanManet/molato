
var connexion = require('./configuration/mysqlConf');

function getAllArticle(){
    return connexion.then(function(done, err){
        if(err) throw err;
        return done.query('SELECT * FROM article');
    })
}


function delArticleMod(req){
    return connexion.then(function(done, err){
        if(err) throw err;
        return done.query('DELETE FROM article WHERE id=?',[req.params.id])
    });
}

function modifArticle(req){
    return connexion.then(function(done, err){
        if(err) throw err;
        return done.query('SELECT * FROM article WHERE id=?',[req.params.id])

    });
}


function saveModArticles(product_name,product_categorie,prix,image,id){
    return connexion.then(function(done, err){
        if(err) throw err;
        //JE DOIS FAIRE  DE REQ BODY ACCORDING TO MY DATABASE //DONE

        return done.query("UPDATE article SET nom=?, category=?, prix=?,image=? WHERE id=?", [product_name,product_categorie,prix,image,id])
    });
}
module.exports = {
    getAllArticle : getAllArticle,
    delArticleMod:delArticleMod,
    modifArticle:modifArticle,
    saveModArticles:saveModArticles
};