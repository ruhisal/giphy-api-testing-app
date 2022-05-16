import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GifsTrendComponent } from './gifs-trend/gifs-trend.component';
import { SportsComponent } from './sports/sports.component';
import { ReactionsComponent } from './reactions/reactions.component';
const routes: Routes = [
  {path:'Trending',component:GifsTrendComponent},
  {path:"Entertainment",component:EntertainmentComponent},
  {path:"Sports",component:SportsComponent},
  {path:"Reactions",component:ReactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EntertainmentComponent,SportsComponent,GifsTrendComponent,ReactionsComponent];