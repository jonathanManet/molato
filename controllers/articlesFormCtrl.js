var articlesFormMod = require('../models/articlesFormMod');

function articlesFormPage(req, res, next) {
    res.render('articlesForm');
}
//pour poster les nouveaux les article dans mon ejs
function getArticle (req,res,next) {
    articlesFormMod.postArticleServer(req).then(function(done,err) {
        if (err) throw err;
        res.redirect('/admin/article')

    });


}




module.exports= {
    articlesFormPage : articlesFormPage,
    getArticle : getArticle
};