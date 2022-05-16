import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})

export class EntertainmentComponent implements OnInit {
  constructor(private gs:GiphyService) { }
  gifs:any[]=[];
  holder:string='entertainment';
  ngOnInit(): void {
    this.gs.getGifbyparameters(this.holder).subscribe(data=>{
      console.log(data.data);
      this.gifs=data.data;
    });
  }
  searchentertainentgifs(){
      this.gs.getGifbyparameters(this.holder).subscribe(data=>{
        console.log(data.data);
        this.gifs=data.data;
      });
}
}
