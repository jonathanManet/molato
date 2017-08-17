var userModel = require('../models/userModel');
var moment = require('moment');
moment.locale("fr");

function clientPageConstructor(req, res, next) {
    userModel.getAllUser().then(function(done){
        res.render('client', {client : done,moment: moment});
    })
}

function adminPageConstructor(req, res, next) {
    res.render('backof');
}


function supUserCtrl(req,res,next) {
    userModel.delUserMod(req).then(function(done,err){
        if (err) throw err;
        // console.log(resultat);
        res.redirect('/admin/client');
    });

}

function modiPage(req,res,next) {
    userModel.modiMod(req).then(function(done,err){
        if (err) throw err;
        res.render('client_modif', {client_modif: done,moment: moment});
    });
}

function saveModifPage(req,res,next) {
    var date= moment(req.body.Date_naissance,['DD-MMMM-YYYY'],false).format('YYYY-MM-DD')
    userModel.saveMod(req.body.Nom,req.body.Prenom,date,req.body.Email,req.body.Password,req.body.Portable,req.params.id).then(function (done, err) {
        if (err) throw err;
        // console.log(resultat);
        res.redirect('/admin/client');
    });

}
module.exports ={

    clientPageConstructor : clientPageConstructor,
    adminPageConstructor : adminPageConstructor,
    supUserCtrl:supUserCtrl,
    modiPage:modiPage,
    saveModifPage :saveModifPage
};