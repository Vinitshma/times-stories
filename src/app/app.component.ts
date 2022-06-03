import { Component, OnInit } from '@angular/core';
import { TimeStoriesService } from './time-stories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'times';
  data: any;
  link = "assets/times.json/link";

  constructor(private timesStories:TimeStoriesService){}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  async getDataFromApi() {
    this.data = await this.timesStories.getTimesStories();
  }
  
  cardDetails = [
    {id:1, image:'assets/crypto.jpeg', headline: 'India’s consultation paper on cryptocurrency is fairly ready'},
    {id:2, image:'assets/google.jpg', headline: 'Google develops a new camera system for historical street views'},
    {id:3, image:'assets/indigo.jpeg', headline: 'IndiGo to conduct internal study on how to better handle specially-abled passengers'},
    {id:4, image:'assets/elon.jpeg', headline: 'Musk says $44-billion Twitter deal on hold'},
    {id:5, image:'assets/kia.jpg', headline: 'Kia enhances digital play by enabling customers to make purchases online'},
    {id:6, image:'assets/sensex.jpg', headline: 'Record trade deficit due to import surge in May'}
  ]
}
