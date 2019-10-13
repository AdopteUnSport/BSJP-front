import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Router} from '@angular/router';

export interface ImageServiceInterface {

 

  getImage(imageId:string) : Observable<string>;
 
}


@Injectable({
  providedIn: 'root'
})
export class ImageService implements ImageServiceInterface{


  public getImage(imageId:string) : Observable<string> {
    let image = new Subject<string>();

    let httpParams = new HttpParams()
    .set('imageId', imageId);
    this.http.get<any>("/api/images/", {params: httpParams}).subscribe(response => {
      image.next(response);
    }, error => {
      image.error(error);
    });
    return image.asObservable();
  }
  public async getImageByTags(tags:string[]) : Promise<string> {
    let image : string = "http://localhost:3000/api/image/?"
    await tags.forEach(tag =>{
      image+="tags="+tag+"&"
    })
    return image;
  }
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
}
