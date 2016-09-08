import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import { MoviesListComponent } from './movies/moviesList.component';
import {MovieDetailsComponent} from './movies/movieDetails.component';
import {MovieNewComponent} from './movies/movieNew.component';
import {MovieData} from './common/data/movies.data';
import { MoviesService } from './common/services/movies.service';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { InMemoryWebApiModule  } from 'angular2-in-memory-web-api';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [AppComponent,MoviesListComponent,MovieDetailsComponent,MovieNewComponent],
  imports     : [BrowserModule,FormsModule,InMemoryWebApiModule.forRoot(MovieData), HttpModule],
  providers   : [MoviesService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
