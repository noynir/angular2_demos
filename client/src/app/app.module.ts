import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import { MoviesListComponent } from './movies/moviesList.component';
import {MovieDetailsComponent} from './movies/movieDetails.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent,MoviesListComponent,MovieDetailsComponent],
  imports     : [BrowserModule,FormsModule],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
