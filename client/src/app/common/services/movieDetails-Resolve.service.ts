import { Injectable } from '@angular/core';
import { Router,Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService  } from '../services/movies.service.ts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import Movie from '../models/movie.model';

@Injectable()
export class MovieDetailsResolve implements Resolve<Movie> {

    constructor(private movieService: MoviesService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Movie> | Promise<Movie>{
         let id= +route.parent.params['id'];  
         return this.movieService.getMovie(id);
    }

}