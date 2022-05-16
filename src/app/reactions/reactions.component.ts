import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})

export class ReactionsComponent implements OnInit {
  constructor(private gs:GiphyService) { }
  gifs:any[]=[];
  holder:string='reactions';
  ngOnInit(): void {
    this.gs.getGifbyparameters(this.holder).subscribe(data=>{
      console.log(data.data);
      this.gifs=data.data;
    });
  }
  searchreactiongifs(){
      this.gs.getGifbyparameters(this.holder).subscribe(data=>{
        console.log(data.data);
      });
}
}
