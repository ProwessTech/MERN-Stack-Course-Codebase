let express = require('express');


let app = express();


app.set('view engine','ejs');


app.get("/", function(req,res){
    res.render("welcome",{name: 'Arul'});
});

app.listen(5000, function(req,res){
    console.log("Server Connected to port 5000");
});
