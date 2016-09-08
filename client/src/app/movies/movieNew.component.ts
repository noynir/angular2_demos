import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Movie from '../common/models/movie.model';

@Component({
    selector: 'movieNew',
    template: ` 
          <div>
            <label >
              Title: <input type='text' [(ngModel)]="newMovie.title" />
            </label>
          </div>   
           <div>
            <label >
              Year: <input type='text' [(ngModel)]="newMovie.year" />
            </label>
          </div>  
           <div>
            <label >
              Poster Url: <input type='text' [(ngModel)]="newMovie.poster" />
            </label>
          </div>   
          <div>
              <button (click)="onSubmit()" >Add Movie</button>
          </div>        
    `
})
export class MovieNewComponent implements OnInit {
    
    private newMovie:Movie;
    
    @Output()
    private onMovieAdded:EventEmitter<Movie> = new EventEmitter<Movie>();
    constructor() { }

    ngOnInit() {
        this.newMovie=new Movie();
     }

    onSubmit(){
        this.onMovieAdded.emit(this.newMovie);
    }
}