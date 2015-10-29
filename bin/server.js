/*
 *
 *
 */
 
var express  = require('express');
var app      = express();
var port     = 4000;
var fs       = require('fs');
var template = '';

fs.readFile(__dirname+'/template.txt',function(err,data){
	template = data.toString();
});

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
  res.render('pad',{template1:template});
});

app.listen(port,function(){
  console.log('express ready!');
})