import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    SliderbarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
