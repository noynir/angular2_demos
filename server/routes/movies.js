var dataService = require('../services/moviesService.js');
var router = require('express').Router();


router.get('/',function(req,res){
  dataService.getMovies(parseInt(req.query.limit),req.query.page).then(function(doc){

    return res.send(doc);
  })
})

router.post('/',function(req,res){
  console.log(req.body);
  dataService.createMovie(req.body).then(function(doc){
    return res.send(doc);
  })
})

module.exports=router;
