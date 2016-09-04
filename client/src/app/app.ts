import {Component, OnInit} from '@angular/core';
import Movie from './common/models/movie.model';

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
  template: `
    <h1>Movie Catalog</h1>
    <section>
      <div class='details'>
          <h3>{{movie.title}} Details</h3>
          <div>
            Id: {{movie.id}}
          </div>
          <div>
            <label >
              Title: <input type='text' [(ngModel)]="movie.title" />
            </label>
          </div>          
      </div>
    </section>
  `,
})
export class AppComponent implements OnInit  {
  
  private movie:Movie;

  constructor(){
    
  }

  ngOnInit(){
    this.movie = new Movie(3,'Toy Story');
    console.log('app init');
  }

  onSaveMovie(value){
    this.movie.title=value;
  }

}
