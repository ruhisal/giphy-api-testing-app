import { Component, OnInit } from '@angular/core';
import{GiphyService}from"../services/giphy.service";
// import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {
constructor(private gs:GiphyService) { }
gigs:any[]=[]
  ngOnInit(): void {
  }
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
