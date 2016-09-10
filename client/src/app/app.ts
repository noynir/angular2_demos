import {Component, OnInit} from '@angular/core';
import Movie from './common/models/movie.model';

const MOVIES = 
[
  {
    id: 1,
    title: "Toy story",
    poster:"http://ia.media-imdb.com/images/M/MV5BMTMwNDU0NTY2Nl5BMl5BanBnXkFtZTcwOTUxOTM5Mw@@._V1._SX214_CR0,0,214,314_.jpg",
    year: 1995,
    genres: [
      "Adventure",
      "Animation",
      "Children",
      "Comedy",
      "Fantasy"
    ]
  },
  {
    "id": 6,
    "title": "Heat",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTM1NDc4ODkxNV5BMl5BanBnXkFtZTcwNTI4ODE3MQ@@._V1._SY314_CR1,0,214,314_.jpg",
    "year": 1995,
    "genres": [
      "Crime",
      "Thriller"
    ]
  },
  {
    "id": 16,
    "title": "Casino",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0NDk5NDc5OF5BMl5BanBnXkFtZTYwMDYyNDA5._V1._SX214_CR0,0,214,314_.jpg",
    "year": 1995,
    "genres": [
      "Drama"
    ]
  },
  {
    "id": 32,
    "title": "Twelve Monkeys",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTQwNzg2OTUzMV5BMl5BanBnXkFtZTYwMTg4ODU5._V1._SX214_CR0,0,214,314_.jpg",
    "year": 1995,
    "genres": [
      "Thriller"
    ]
  },
  {
    "id": 45,
    "title": "Live Free or Die Hard",
    "poster": "http://ia.media-imdb.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 2007,
    "genres": [
      "Romance"
    ]
  },
  {
    "id": 50,
    "title": "The Usual Suspects",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTg0NzIyMTA3M15BMl5BanBnXkFtZTcwMDQ3MjI3Mw@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 1995,
    "genres": [
      "Mystery",
      "Thriller"
    ]
  },
  {
    "id": 70,
    "title": "From Dusk Till Dawn",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTI0NzM0MzE4MV5BMl5BanBnXkFtZTcwNjgwODg0MQ@@._V1._SY314_CR3,0,214,314_.jpg",
    "year": 1996,
    "genres": [
      "Comedy",
      "Horror",
      "Thriller"
    ]
  },
  {
    "id": 1240,
    "title": "Terminator Salvation",
    "poster": "http://ia.media-imdb.com/images/M/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg@@._V1._SY314_CR9,0,214,314_.jpg",
    "year": 2009,
    "genres": [
      "Sci-Fi",
      "Thriller"
    ]
  },
    {
    "_id": "57c6d8d94b24405648ce3d49",
    "id": 417,
    "title": "Vicky Cristina Barcelona",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 2008,
    "genres": [
      "Romance"
    ]
  },
    {
    "_id": "57c6d8d94b24405648ce41f6",
    "id": 1791,
    "title": "Twilight",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 2008,
    "genres": [
      "Drama",
      "Thriller"
    ]
  },
  {
    "_id": "57c6d8d94b24405648ce423e",
    "id": 1872,
    "title": "Slumdog Millionaire",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 2008,
    "genres": []
  },
    {
    "_id": "57c6d8d94b24405648ce4d30",
    "id": 4780,
    "title": "Taken",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg@@._V1._SX214_CR0,0,214,314_.jpg",
    "year": 2008,
    "genres": []
  }
];

@Component({
  selector   : 'app',
  styles:[`
    h1 {
     color:blue; 
    }
    section{
      padding:10px;
    }
    ul{
      list-style:none;
    }
    .list{
      margin:10px;
    }
    .list li img{
      width:80px;
      height:118px;
    }
    .movieItem{
        margin-bottom:10px;
        height: 118px;
        width:512px;
        background-color:#ffffff;
        border:solid 1px #e3e3e3;
        box-shadow:0 2px 5px rgba(0,0,0,0.4)

    }
    .movieItem .info{
       padding: 5px;

    }
    .movieItem .imgContainer{
      margin-right:10px;
      border-right:solid 1px black;
      padding:0;
      height:118px;  
    }
    .movieItem .info b{
      line-height:36px;
      font-size:24px;
    }
    .movieItem .info span{
      color:#b8b8b8;
      font-size:18px;
    }
    .movieItem.selected{
      background-color:#FFFADD;
    }
  `],
  template: `
    <h1>Movie Catalog</h1>
    <section class="group">
      <div class="list pull-left">
        <ul>
          <li class="movieItem group" [ngClass]="{selected:selectedMovie===movie}" *ngFor="let movie of movies" (click)="onMovieSelected(movie)">
            <div>
              <div class="imgContainer pull-left">
                  <img [src]="movie.poster" />
              </div>
              <div class="info pull-left">
                  <b>{{movie.title}}</b><br />
                  <span>Released  {{movie.year}}</span>
              </div>
            </div>
          </li>
        </ul>

      </div>
      <div class="details pull-left" *ngIf="selectedMovie" >
          <h3>{{selectedMovie.title}} Details</h3>
          <div>
            Id: {{selectedMovie.id}}
          </div>
          <div>
            <label >
              Title: <input type='text' [(ngModel)]="selectedMovie.title" />
            </label>
          </div>          
      </div>
    </section>
  `,
})
export class AppComponent implements OnInit  {
  
  private movies:any;
  private selectedMovie:Movie;

  constructor(){
    this.movies=MOVIES;
  }

  ngOnInit(){
    console.log('app init');
  }

  onSaveMovie(value){
    this.selectedMovie.title=value;
  }
  onMovieSelected(_movie:Movie){
    this.selectedMovie=_movie;
  }

}
