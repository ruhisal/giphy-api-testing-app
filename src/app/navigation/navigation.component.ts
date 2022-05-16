import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private gs:GiphyService) { }

  ngOnInit(): void {
  }
  holderreaction:string='reaction';
  searchreactiongifs(){
      this.gs.getGifbyparameters(this.holderreaction).subscribe(data=>{
        console.log(data.data);
      });
  }
  holderentertainment:string='entertainment';
  searchentertainentgifs(){
      this.gs.getGifbyparameters(this.holderentertainment).subscribe(data=>{
        console.log(data.data);
      });
}
holdersports:string='sports';
searchsportsgifs(){
    this.gs.getGifbyparameters(this.holdersports).subscribe(data=>{
      console.log(data.data);
    });
}
gifs:any[]=[];
gettrendinggifs(){
  this.gs.getGif().subscribe(sata=>{
    this.gifs=sata.data;
    console.log(this.gifs);
  });
}
}

