const { route } = require("../routes")

module.exports.home = function(req,res){

    return res.render('home');

    
}


module.exports.events = function(req,res){

    return res.render('events');

    
}

module.exports.team = function(req,res){

    return res.render('team');

    
}

module.exports.gallery = function(req,res){

    return res.render('gallery');

    
}

module.exports.contact = function(req,res){

    return res.render('contact');

    
}

module.exports.addmission = function(req,res){

    return res.render('admission');

    
}

