import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface UserServiceInterface {

  hasUser() : boolean;

  getToken(): string;

  login(login: string, password: string): Observable<any>;
}


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface{

  public hasUser() {
    return false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(login: string, password: string): Observable<any>{
    let httpParams = new HttpParams()
    .set('userId', login)
    .set('password', password);
    return this.http.get<any>("http://51.83.70.42/user/login", {params: httpParams});
  }

  constructor(
    private http: HttpClient
  ) { }
}
