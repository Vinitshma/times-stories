import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeStoriesService {

  url: string = "assets/times.json";
  connectionEstablished = false;

  constructor(private http:HttpClient) { }

  async getTimesStories(){
    return await this.http.get(this.url)
    .toPromise().then(result => {
      this.connectionEstablished = true;
      return result;
    },
    error => {
      this.connectionEstablished = false; 
      return(error);
    })
  }
}
