var mongoose=require('mongoose');
var Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost/moviesDB');
//mongoimport --db moviesDB --type csv --file ./movies.csv --headerline


var movieSchema = new Schema({
  id:Number,
  title:String,
  imdbPictureURL:String,
  year:Number,
  rtAllCriticsRating:Number,
  rtAllCriticsNumReviews:Number
});
var Movie=mongoose.model('movie',movieSchema);

module.exports.getMovies=function(limit,page){
  //console.log(movieSchema);
  var l = limit || 5;
  var p = page ? (page>0 ? (page-1)*l : 0) : 0;
  return Movie.find()
          .sort({'year':-1})
          .limit(l)
          .skip(p)
          .select("id title imdbPictureURL year Genres");
};
