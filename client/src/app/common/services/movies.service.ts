import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';
import {MOVIES} from '../mocks/movies.mock';

@Injectable()
export class MoviesService {

    constructor() { }

        getMovies():Promise<Movie[]>{
           return Promise.resolve(MOVIES);
        }
        getMoviesSlowly():Promise<Movie[]>{
           return new Promise<Movie[]>(resolve  => 
           setTimeout(resolve,2000)).then(()=>this.getMovies());
        }
}