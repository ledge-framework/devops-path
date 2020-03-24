import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PathComponent} from './path/path.component';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    PathComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
