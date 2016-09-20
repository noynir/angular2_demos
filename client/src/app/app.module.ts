import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import { MovieService } from './common/services/movieService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ],
  imports     : [BrowserModule,FormsModule, HttpModule],
  providers   : [MovieService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
