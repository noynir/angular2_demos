import { Component, OnInit, Input } from '@angular/core';
import { MoviesService  } from '../common/services/movies.service.ts';
import Movie from '../common/models/movie.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
              Title: <input type='text' [(ngModel)]="editTitle" />
            </label>
          </div>   
           <div>
            <label >
              Year: <input type='text' [(ngModel)]="editYear" />
            </label>
          </div>
          <button (click)="saveMovie()" >Save</button>
          <button (click)="goToList()" >Back</button>          
      </div>  
    `
})
export class MovieDetailsComponent implements OnInit {
    
    selectedMovie:Movie;
    private errorMessage:string;

    editTitle:string;
    editYear:number; 

    constructor(private movieService:MoviesService,
                private route: ActivatedRoute,
                private router:Router) {

    }

    ngOnInit() { 
      this.route.data.forEach( (data:{currentMovie:Movie}) => {
           this.selectedMovie=data.currentMovie;
           this.editTitle=data.currentMovie.title;
           this.editYear=data.currentMovie.year;
      });
    }

    saveMovie(){
      this.selectedMovie.title=this.editTitle;
      this.selectedMovie.year= this.editYear;
      this.movieService.saveMovie(this.selectedMovie)
          .subscribe(() => this.goToList())
    }

    goToList(){
      this.router.navigate(['/movies']);
    }
}