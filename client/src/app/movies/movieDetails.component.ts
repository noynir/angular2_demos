import { Component, OnInit, Input } from '@angular/core';
import { MoviesService  } from '../common/services/movies.service.ts';
import Movie from '../common/models/movie.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'movieDetails',
    template:`
       <div class='details pull-left' *ngIf="selectedMovie" >
          <h3>{{selectedMovie.title}} Details</h3>
          <div>
            Id: {{selectedMovie.id}}
          </div>
          <div>
            <label >
              Title: <input type='text' [(ngModel)]="selectedMovie.title" />
            </label>
          </div>   
           <div>
            <label >
              Year: <input type='text' [(ngModel)]="selectedMovie.year" />
            </label>
          </div>
          <button (click)="saveMovie()" >Save</button>          
      </div>  
    `
})
export class MovieDetailsComponent implements OnInit {
    
    private selectedMovie:Movie;

    private errorMessage:string;

    constructor(private movieService: MoviesService,
                private route: ActivatedRoute,
                private router:Router) {

    }

    ngOnInit() { 
      this.route.params.forEach( (params:Params) => {
          let id = params['id'];
          this.movieService.getMovie(id)
            .subscribe(
                movie => this.selectedMovie = movie,
                error => this.errorMessage = error);
      });
    }

    saveMovie(){
      this.movieService.saveMovie(this.selectedMovie)
          .subscribe(() => this.goToList())
    }

    goToList(){
      this.router.navigate(['/movies']);
    }
}