import {Component, OnInit} from '@angular/core';
import Movie from './common/models/movie.model';
import { MoviesService } from './common/services/movies.service';


@Component({
  selector   : 'app',
  styles:[`
    h1 {
     color:blue; 
    }
    section{
      padding:10px;
    }
  `],
  template:`
    <h1>Movie Catalog</h1>
    <section>
      <moviesList (onMovieSelected)="onMovieSelected($event)" [movies]="moviesList" ></moviesList>
      <movieDetails [selectedMovie]="selectedMovie" ></movieDetails>
    </section>
  `
})
export class AppComponent implements OnInit  {
  
  private moviesList:any;
  private selectedMovie:Movie;

  constructor(private moviesService:MoviesService){
   
  }


  ngOnInit(){

    this.moviesService.getMoviesSlowly().then(data=> this.moviesList=data);
    console.log('app init');
  }

  onSaveMovie(value){
    this.selectedMovie.title=value;
  }
  onMovieSelected(_movie:Movie){
    this.selectedMovie=_movie;
  }

}
