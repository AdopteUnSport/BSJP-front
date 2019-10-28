import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public getProducts(search: string): any {
    let params = new HttpParams().set("search", search); 

    return this.http.get('daas/search', {params: params});
  }

  constructor(
    @Inject(HttpClient) public http: HttpClient,
  ) { }
}
