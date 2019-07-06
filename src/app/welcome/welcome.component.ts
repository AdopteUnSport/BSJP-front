import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  height: string = '600px';
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
  width: string = '50%';
  fullscreen: boolean = false;
  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
    
    "https://i.pinimg.com/originals/22/00/7d/22007d89fdb6b178488a2e1024a90fa6.jpg",
     "https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg",
    "https://cdn.wallpapersafari.com/13/11/FlRVO7.jpg",
     "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/la-basique-pizza-regina-2035266/11362329-2-fre-FR/Pizza-Regina.jpg",
    ];
}

 

}
