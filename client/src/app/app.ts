import {Component, OnInit} from '@angular/core' ;
import {MovieService} from './common/services/movieService'

@Component({
  selector   : 'app',
  styles:[
    `  
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
      
    `
  ],
  template:`
    <section>
        <div>
          <h1>Movie  Catalog</h1>
          <section>
          <div>
            <div>
              <label>Title:<input type="text" [(ngModel)]="newMovie.title" /> </label>
            </div>
            <div>
              <label>Release:<input type="text" [(ngModel)]="newMovie.year" /> </label>
            </div>
            <div>
              <label>Poster:<input type="text" [(ngModel)]="newMovie.imdbPictureURL" /> </label>
            </div>
            <button (click)="saveMovie()" >Save</button> 
          </div>
          <div class="list" >
            <ul>
              
                       <li *ngFor="let movie of movies" class="movieItem group">
                          <div>
                            <div class="imgContainer pull-left">
                                <img [src]="movie.imdbPictureURL" />
                            </div>
                            <div class="info pull-left">
                                <b>{{movie.title}}</b><br />
                                <span>Released  {{movie.year}}</span>
                            </div>
                          </div>
                        </li>
              
            </ul>
          </div> 
          </section>
        </div>
    </section>
  ` ,
})
export class AppComponent implements OnInit {
    
    private movies:any[]=[];
    private newMovie:any={};
    

    constructor(private movieService:MovieService){}
  
    ngOnInit(){
        this.movieService.getAll()
          .subscribe(movies => this.movies=movies);
    }
    
    saveMovie(){
      this.movieService.createMovie(this.newMovie)
          .subscribe(movie =>{
            this.movies.push(movie);
            this.newMovie={};
            
          });
    }

}
