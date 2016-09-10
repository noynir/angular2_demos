import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import { AppRoutingModule } from './app.routing';
import {ConfirmService } from './common/services/confirm.service';
import { MoviesRoutingModule, MOVIES_ROUTING_PROVIDERS } from './movies/movies.routing';
import { MovieDetailsResolve } from './common/services/movieDetails-Resolve.service';
import { MoviesListComponent } from './movies/moviesList.component';
import {MovieDetailsComponent} from './movies/movieDetails.component';
import {MovieNewComponent} from './movies/movieNew.component';
import {MovieData} from './common/data/movies.data';
import { MoviesService } from './common/services/movies.service';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { InMemoryWebApiModule  } from 'angular2-in-memory-web-api';
import {HttpModule} from '@angular/http';
import { MoviesCatalogComponent } from './movies/moviesCatalog.component';


@NgModule({
  declarations: [AppComponent,MoviesListComponent,MovieDetailsComponent,MovieNewComponent,MoviesCatalogComponent],
  imports     : [BrowserModule,
                  FormsModule,InMemoryWebApiModule.forRoot(MovieData), HttpModule, AppRoutingModule,MoviesRoutingModule],
  providers   : [MoviesService,MovieDetailsResolve,MOVIES_ROUTING_PROVIDERS,ConfirmService  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
