function accueilConstructor(req, res, next) {
    res.render('index');
}

module.exports = {
    accueilConstructor : accueilConstructor
};