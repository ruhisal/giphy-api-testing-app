import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})

export class ReactionsComponent implements OnInit {

  constructor(private gs:GiphyService) { }

  ngOnInit(): void {
  }
  holder:string='reactions';
  searchreactiongifs(){
      this.gs.getGifbyparameters(this.holder).subscribe(data=>{
        console.log(data.data);
      });
}
}
