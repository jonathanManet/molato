
var connexion = require('./configuration/mysqlConf');
var moment = require('moment');

// pour Ajouter les utilisateur dans ma base de données
function postUserServer(req){

    return connexion.then(function(done, err){
        if(err) throw err;
        var nom = req.body.Nom;
        var prenom = req.body.Prenom;
        var date_naissance = moment(req.body.Date_naissance, ['DD-MM-YYYY'],false).format("YYYY-MM-DD");
        // console.log(typeof date_naissance);

        var mot_de_passe = req.body.Password;
        var e_mail = req.body.Email;
        var telephone = req.body.Portable;
        return done.query("INSERT INTO user (nom,prenom,date_naissance,mot_de_pass,e_mail,portable) VALUES(?,?,?,?,?,?)", [nom,prenom,date_naissance,mot_de_passe,e_mail,telephone]);

    });

}


module.exports = {

    postUserServer: postUserServer
};