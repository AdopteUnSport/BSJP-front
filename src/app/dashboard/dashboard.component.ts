import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
    
    "https://static.cuisineaz.com/400x320/i103360-gratin-de-brocolis-a-l-emmental.jpg",
     "https://static.cuisineaz.com/400x320/i16694-cuisses-de-lapin-a-la-moutarde.jpg",
    "https://static.cuisineaz.com/400x320/i96291-beignets-d-oignons-onion-rings.jpg",
     "https://static.cuisineaz.com/400x320/i16694-cuisses-de-lapin-a-la-moutarde.jpg",

    "https://static.cuisineaz.com/400x320/i103360-gratin-de-brocolis-a-l-emmental.jpg",
     "https://static.cuisineaz.com/400x320/i16694-cuisses-de-lapin-a-la-moutarde.jpg",
    "https://static.cuisineaz.com/400x320/i96291-beignets-d-oignons-onion-rings.jpg",
     "https://static.cuisineaz.com/400x320/i16694-cuisses-de-lapin-a-la-moutarde.jpg"
    ];
}

}
