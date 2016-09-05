import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule,FormsModule],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
