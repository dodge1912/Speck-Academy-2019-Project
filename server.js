const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const halls = require('./halls');


app.use( "/halls" , function( req , res ){
    res.json(halls);
});

app.use('/', express.static('public')); //izvuci sve iteme i prikazi 

app.use(bodyParser.urlencoded({ //
    extended:false
}));

app.post("/hallsCreate", function (req, res) {
    halls.add(req.body.hallName);
    res.redirect("/halls");
});

app.post('/hallsUpdate', function(req, res){

    var id = parseInt(req.body.hallId);
    var reservedFrom = new Date();
    var reservedUntil = new Date(req.body.reservedUntil);

    halls.reservation(id, reservedFrom, reservedUntil );
    res.redirect("/halls");
});

app.post('/hallsDelete',function(req, res){
    var id = parseInt(req.body.hallsDelete);

    halls.remove(id);
    res.redirect("/");
});


app.listen(3003);

