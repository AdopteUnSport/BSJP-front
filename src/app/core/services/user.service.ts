import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface UserServiceInterface {

  hasUser() : boolean;

  getToken(): string;

  login(userName: string, password: string): Observable<any>;

  register(login: string, email: string, password: string): Observable<any>;
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

  public login(userName: string, password: string): Observable<any>{
    let httpParams = new HttpParams()
    .set('userName', userName)
    .set('password', password);
    return this.http.get<any>("/api/user/login", {params: httpParams});
  }

  register(login: string, email: string, password: string): Observable<any>{
    /*let httpParams = new HttpParams()
    .set('username', login)
    .set('email', email)
    .set('password', password);
    return this.http.post<any>("/api/user", {params: httpParams});*/

    let body: any = {
      username: login,
      email: email,
      password: password,
    }

    return this.http.post<any>("/api/user", body);

  }

  constructor(
    private http: HttpClient
  ) { }
}
