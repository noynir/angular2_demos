var dataService = require('../services/moviesService.js');
var router = require('express').Router();


router.get('/',function(req,res){
  dataService.getMovies(parseInt(req.query.limit),req.query.page).then(function(doc){

    return res.send(doc);
  })
})

module.exports=router;
