var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/credence-backend");
var Movies = require("./model/movies");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(req,res){
    Movies.find({},function(err,movies){
        if(err){
            res.status(500).send("Could not fetch the products");
        }else{
            res.send(movies);
        }
    });
})

app.post('/movies/add',function(req,res){
    var movie = new Movies();
    movie.name = req.body.name;
    movie.img = req.body.img;
    movie.summary = req.body.summary;
    movie.save(function(err,savedMovie){
        if(err){
            res.status(500,{error:"Could not save the product"});
        }else{
            res.send(savedMovie);
        }
    });
});

app.get("/movies/edit/:pid",function(req,res){
    Movies.findOne({_id:req.params.pid},function(err,movie){
        if(err){
            res.status(500).send("Couldn't find the product");
        }else{
           res.send(movie);
        }
    });
});

app.patch("/movies/edit/:pid",function(req,res){
           Movies.updateOne({_id:req.params.pid},req.body,function(err,msg){
            if(err){
                res.status(500).send("Something wrong with updation");
            }else{
                res.send(msg);
            }
           });
});

app.delete("/movies/delete/:pid",function(req,res){
    Movies.deleteOne({_id:req.params.pid},function(err,msg){
     if(err){
         res.status(500).send("Something wrong with updation");
     }else{
         res.send(msg);
     }
    });
});

app.listen(3000,function(){
    console.log("Server is running on Port:3000");
})