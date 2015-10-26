/*
 *
 *
 */
 
var express = require('express');
var app     = express();
var port    = 4000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
  res.render('pad');
});

app.listen(port,function(){
  console.log('express ready!');
})