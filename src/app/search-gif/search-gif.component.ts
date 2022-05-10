import { Component, OnInit } from '@angular/core';
import{GiphyService}from"../services/giphy.service";
@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {

  constructor(private gs:GiphyService) { }

  ngOnInit(): void {
  }
  search(query:string){
    if(query!=""){
      this.gs.getGifbyparameters(query).subscribe(data=>{
        console.log(data.data);
      });
  }
}
}
