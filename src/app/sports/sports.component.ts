import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private gs:GiphyService) { }
  gifs:any[]=[];
  ngOnInit(): void {
    this.gs.getGifbyparameters(this.holder).subscribe(data=>{
      console.log(data.data);
      this.gifs=data.data;
    });
  }
  holder:string='sports';
  searchsportsgifs(){
      this.gs.getGifbyparameters(this.holder).subscribe(data=>{
        console.log(data.data);
      });
}
}
