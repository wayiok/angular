import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { PricesComponent } from './prices/prices.component';
import { HeaaderComponent } from './heaader/heaader.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundVideoComponent,
    PricesComponent,
    HeaaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
