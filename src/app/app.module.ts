import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GiphyService } from './services/giphy.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GifsTrendComponent } from './gifs-trend/gifs-trend.component';
import { SearchGifComponent } from './search-gif/search-gif.component';
@NgModule({
  declarations: [
    AppComponent,
    GifsTrendComponent,
    SearchGifComponent
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