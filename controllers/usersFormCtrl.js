var userFormMod = require('../models/userFormMod');

function usersFormPage(req, res, next) {
    res.render('usersForm');
}
//pour poster les nouveaux utilisateurs dans mon ejs
function getUser (req,res,next) {
    userFormMod.postUserServer(req).then(function(done,err) {
            // res.render('usersForm', {userForm: done});
        if (err) throw err;
        res.redirect('/admin/client')

    });


}




module.exports= {
    usersFormPage : usersFormPage,
    getUser : getUser
};