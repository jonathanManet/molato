
var connexion = require('./configuration/mysqlConf');

function getAllUser(){
    return connexion.then(function(done, err){
        if(err) throw err;
        return done.query('SELECT * FROM user');
    })
}

function delUserMod(req){
    return connexion.then(function(done, err){
        if(err) throw err;
        return done.query('DELETE FROM user WHERE id=?',[req.params.id])

    });
}

function modiMod(req){
return connexion.then(function(done, err){
    if(err) throw err;
    return done.query('SELECT * FROM user WHERE id=?',[req.params.id])

    });
}

function saveMod(Nom,Prenom,Date_naissance,Email,Password,Portable,id){
    return connexion.then(function(done, err){
        if(err) throw err;
        //JE DOIS FAIRE  DE REQ BODY ACCORDING TO MY DATABASE //DONE

        return done.query("UPDATE user SET nom=?, prenom=?, date_naissance=?,e_mail=?, mot_de_pass=?, portable=? WHERE id=?", [Nom,Prenom,Date_naissance,Email,Password,Portable,id])
    });
}
module.exports = {
    delUserMod: delUserMod,
    getAllUser : getAllUser,
    modiMod:modiMod,
    saveMod :saveMod
};