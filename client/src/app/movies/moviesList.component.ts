import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import Movie from '../common/models/movie.model';

@Component({
    selector: 'moviesList',
    styles:[`
    ul{
      list-style:none;
    }
    .list li img{
      width:80px;
      height:114px;
    }
    .movieItem{
        margin-bottom:10px;
        border:solid 1px black;
        height: 114px;
        cursor: pointer; 
    }
    .movieItem .imgContainer{
      margin-right:10px;
      border-right:solid 1px black;
      padding:0;
      height:100%
    }
    .movieItem .info b{
      padding-bottom:20px;
    }
    .movieItem.selected{
      background-color:#FFFADD;
    }
    
    `],
    template: `
    <div class="list">
        <ul>
            <li class="movieItem group" [ngClass]="{selected:selectedMovie===movie}" *ngFor="let movie of movies" (click)="onMovieClicked(movie)">
            <div>
                <div class="imgContainer pull-left">
                    <img [src]="movie.poster" />
                </div>
                <div class="info pull-left">
                    <b>{{movie.title}}</b><br />
                    Released  {{movie.year}}
                </div>
            </div>
            </li>
        </ul>
    </div>
    `
})
export class MoviesListComponent implements OnInit {
    
    @Input()
    movies:Movie[];
    
    private selectedMovie:Movie;

    @Output()
    private onMovieSelected:EventEmitter<Movie>;

    constructor() { 
        
        this.onMovieSelected=new EventEmitter<Movie>();
    }
    
 onMovieClicked(_movie:Movie){
     this.selectedMovie=_movie;
    this.onMovieSelected.emit(_movie);
  }

    ngOnInit() { }
}