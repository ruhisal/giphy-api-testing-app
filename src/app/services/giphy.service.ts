import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(private httpClient:HttpClient) { }

  // private catog:string="entertainment";
  private limit:number=20;
  private offset:number=0;
  
  getGif():Observable<any>{
    let params0=new HttpParams().set("api_key",environment.myGiphyApiKey)
    return this.httpClient.get("https://api.giphy.com/v1/gifs/trending?&limit=20",{params:params0});
  }
  getGifbyparameters(query:string):Observable<any>{
      let params1=new HttpParams().set("api_key",environment.myGiphyApiKey).set("q",query)
      .set("limit",this.limit);

      return this.httpClient.get("https://api.giphy.com/v1/gifs/search?",{params:params1});
  }
}

//AHIL commiting