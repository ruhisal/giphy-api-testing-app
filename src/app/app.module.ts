import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GiphyService } from './services/giphy.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GifsTrendComponent } from './gifs-trend/gifs-trend.component';
import { SearchGifComponent } from './search-gif/search-gif.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { SportsComponent } from './sports/sports.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    GifsTrendComponent,
    SearchGifComponent,
    EntertainmentComponent,
    ReactionsComponent,
    SportsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

9396862914