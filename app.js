const express = require('express');
const bodyParser = require("body-parser");

const app= express();

var items = [];
let workItems=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" ,function(req,res){

    var today = new Date();

    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        listTitle : day,
        newListItems: items
    });
    
});
app.get('/work', function(req,res){
    res.render('list', {listTitle:"Work List", newListItems:workItems})
})
app.get('/about', function(req,res){
    res.render('about')
})
app.post('/work', function(req,res){
    let item = req.body.newItem;
    workItem.push(item);
    res.redirect('/work')
})
app.post("/", function(req,res){
    var item = req.body.newItem
    if(req.body.list==="Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
            items.push(item);
            res.redirect("/");
    }

    console.log(item);


});

app.listen(3000, function(){
    console.log('Server started on local host 3000');
});