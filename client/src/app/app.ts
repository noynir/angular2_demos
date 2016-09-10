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
