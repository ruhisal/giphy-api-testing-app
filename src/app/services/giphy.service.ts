import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment} from "../../environments/environment";
import { Root } from 'src/app/classes/config';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(private httpClient:HttpClient) { }

  // private catog:string="entertainment";
  private limit:number=20;
  private offset:number=0;
  
  getGif():Observable<any>{
    return this.httpClient.get("https://api.giphy.com/v1/gifs/trending?api_key=d3GAzcupXbmwQKhn7jj1KIu7EICfiIEt&limit=20&rating=G&lang=en");
  }
  getGifbyparameters(query:string):Observable<any>{
      let params1=new HttpParams().set("api_key",environment.myGiphyApiKey).set("q",query)
      .set("limit",this.limit).set("offset",this.offset).set("rating","g").set("lang","en");

      return this.httpClient.get("https://api.giphy.com/v1/gifs/search?",{params:params1});
  }
}
 