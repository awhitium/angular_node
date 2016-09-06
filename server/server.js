var request = require('request')
var express = require('express')
 
var app = express()
 


app.get('/get-titles', function(req, res) {
  
  request('http://drupal-server/node.json?type=article', function (error, response, body) {
    
    if (!error && response.statusCode == 200) {
      res.header('Access-Control-Allow-Origin', 'http://angular.drupal-server')
      res.json(JSON.parse(body))
    }
    else
      console.log(error)
  })
  
})
 
app.listen(8080)