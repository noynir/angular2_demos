import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'movieDetails',
    template:`
       <div class='details' *ngIf="selectedMovie" >
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
      </div>
    `
})
export class MovieDetailsComponent implements OnInit {
    
    @Input()
    private selectedMovie;

    constructor() { }

    ngOnInit() { }
}