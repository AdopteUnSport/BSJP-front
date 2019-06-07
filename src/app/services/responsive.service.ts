import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  getSizeWindow(): number{
    return window.innerWidth;
  }

  getNbCols(): number{
    if(window.innerWidth >= 1920){
      console.log(5);
      return 5;
    } else if(window.innerWidth >= 1280) {
      console.log(4);
      return 4;
    } else if(window.innerWidth >= 960) {
      console.log(3);
      return 3;
    } else if(window.innerWidth >= 600) {
      console.log(2);
      return 2;
    } else {
      console.log(1);
      return 1;
    }
  }

  constructor() { }
}
