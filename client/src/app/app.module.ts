import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import { MoviesListComponent } from './movies/moviesList.component';
import {MovieDetailsComponent} from './movies/movieDetails.component';
import { MoviesService } from './common/services/movies.service';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent,MoviesListComponent,MovieDetailsComponent],
  imports     : [BrowserModule,FormsModule],
  providers   : [MoviesService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
