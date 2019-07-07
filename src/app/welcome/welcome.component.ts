import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public sliderImages;

  constructor() { }
  
  

  ngOnInit() {

    this.sliderImages = [
      "https://i.pinimg.com/originals/22/00/7d/22007d89fdb6b178488a2e1024a90fa6.jpg",
       "https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg",
      "https://cdn.wallpapersafari.com/13/11/FlRVO7.jpg",
       "http://www.blogmais.org/ourimg/big/40/407237_food-wallpapers-free.jpg",
      ];
}

 

}
