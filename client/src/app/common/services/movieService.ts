import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
    
    private apiUrl = "http://localhost:3030/movies";
    private requesetHeaders: Headers = new Headers({'Content-type':'application/json'});
    constructor(private http:Http) {
    
     }
    
    getAll(limit:Number = 10){
        var url = `${this.apiUrl}?limit=${limit}`;
        return this.http.get(url)
            .map(res=> res.json());
    }

    createMovie(movie){
        
       return this.http.post(this.apiUrl,movie)
            .map(res=> res.json());
    }




}