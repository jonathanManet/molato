var articleModel= require('../models/articleModel');



function articlePageConstructor (req, res, next) {
    articleModel.getAllArticle().then(function(done){
        res.render('article', {article : done});
    });
}

function supArticleCtrl(req,res,next) {
    articleModel.delArticleMod(req).then(function(done,err){
        if (err) throw err;
        // console.log(resultat);
        res.redirect('/admin/article');
    });

}

function modiPageArticle(req,res,next) {
    articleModel.modifArticle(req).then(function(done,err){
        if (err) throw err;
        res.render('article_modif', {article_modif: done});
    });
}


//bosser sur les modif
function saveModifPageArticles(req,res,next) {
    console.log(req.body);
    articleModel.saveModArticles(req.body.product_name,req.body.product_categorie,req.body.prix,req.body.image, req.params.id).then(function (done, err) {
        if (err) throw err;
        res.redirect('/admin/article');
    });

}

module.exports = {
    articlePageConstructor : articlePageConstructor,
    supArticleCtrl:supArticleCtrl,
    modiPageArticle:modiPageArticle,
    saveModifPageArticles:saveModifPageArticles
};