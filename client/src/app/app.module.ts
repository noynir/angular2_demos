import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import { MoviesListComponent } from './movies/moviesList.component';
import {MovieDetailsComponent} from './movies/movieDetails.component';
import { MoviesService } from './common/services/movies.service';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { MovieData } from './common/data/movies.data';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent,MoviesListComponent,MovieDetailsComponent],
  imports     : [BrowserModule,FormsModule,InMemoryWebApiModule.forRoot(MovieData)],
  providers   : [MoviesService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
