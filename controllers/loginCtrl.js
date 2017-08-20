function loginPage(req, res, next) {

    res.render('login');
}

module.exports = {
    loginPage : loginPage
};