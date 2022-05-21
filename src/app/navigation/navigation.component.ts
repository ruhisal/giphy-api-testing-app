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

gigs:any[]=[];
// this.sg.search(query:string){}
// gifs:any[]

search(query:string){
  if(query!=""){
    this.gs.getGifbyparameters(query).subscribe(sata=>{
    this.gigs=sata.data;
      console.log(sata.data);
      return this.gigs;
    });
  }
}
}

