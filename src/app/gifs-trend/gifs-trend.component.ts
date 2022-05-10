import { Component, OnInit } from '@angular/core';
import{GiphyService} from 'src/app/services/giphy.service';
@Component({
  selector: 'app-gifs-trend',
  templateUrl: './gifs-trend.component.html',
  styleUrls: ['./gifs-trend.component.css']
})
export class GifsTrendComponent implements OnInit {

  constructor(private gs:GiphyService) { }
  gifs:any[]=[];
  ngOnInit(): void {
  // * getGifbyparameters method is called with parameters
    this.gs.getGif().subscribe(sata=>{
      this.gifs=sata.data;
      console.log(this.gifs);
    });
  }

}
