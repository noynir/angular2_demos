import { Component, OnInit } from '@angular/core';
import Movie from '../common/models/movie.model';
import { MoviesService } from '../common/services/movies.service';
import { MoviesListComponent } from '../movies/moviesList.component';
import { Router } from '@angular/router';


@Component({
    selector: 'moviesCatalog',
    template: `
        <h1>Movie Catalog</h1>
        <section>
          <div>
              <movieNew (onMovieAdded)="onNewMovie($event)" ></movieNew>
          </div>
          <moviesList (onMovieSelected)="onMovieSelected($event)" [movies]="moviesList" ></moviesList>
        </section>
    `
})
export class MoviesCatalogComponent implements OnInit  {
  
  private moviesList:any[]=[];
  private selectedMovie:Movie;
  private errorMessage:String;

  constructor(private moviesService:MoviesService,
              private router: Router){
    
  }
  
  ngOnInit(){

    this.moviesService.getMovies().subscribe(
      movies => { this.moviesList=movies}
    );

    console.log('Movies Catalog init');
  }

  onMovieSelected(_movie:Movie){
    this.router.navigate(['/movies',_movie.id]);
  }

  onNewMovie(_movie:Movie){
      this.moviesService.create(_movie)
          .subscribe(
            movie=> this.moviesList.push(movie),
            error=> this.errorMessage=error
          )
  }

}
