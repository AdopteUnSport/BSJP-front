import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { Router} from '@angular/router';
import { Ingredient } from '../models/ingredient';

export interface UserServiceInterface {

  hasUser() : boolean;

  getUser() : User;

  getUserName(): string;

  getUserEmail(): string;

  getToken(): string;

  login(userName: string, password: string): Observable<any>;

  register(login: string, email: string, password: string): Observable<any>;

  logout(): Observable<any>;
}


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface{
  public mockFridge:Ingredient[]=[
    {
      _id : 'azdazazdzdazsqd2qsd15',
      category:{
        id: "dazdazdazdaz",
        name: "viande"
      },
      
      name:"bacon",
      quantity:5,
      tags: ["bacon","porc","viande","hallouf"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        id: "dazdazdazdaz",
        name: "legume"
      },
      name:"poivrons",
      quantity:5,
      tags: ["légume","piments","legume","piment vert"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        id: "dazdazdazdaz",
        name: "poisson"
      },
      name:"saumon fumé",
      quantity:1,
      tags: ["poisson","rose","gras","fumé"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        id: "dazdazdazdaz",
        name: "fruit"
      },
      name:"pomme",
      quantity:12,
      tags: ["fruit","pomme","rouge","sucré"]
    }
  ]
  public hasUser(): boolean {
    return localStorage.getItem('user') !== null;
  }

  public getUser() : User {
    if(this.hasUser()) {
      return JSON.parse(localStorage.getItem('user'));
    } else {
      return null;
    }
  }

  getUserName(): string{
    if(this.hasUser()) {
      return JSON.parse(localStorage.getItem('user')).userName;
    } else {
      return null;
    }
  }

  getUserEmail(): string {
    if(this.hasUser()) {
      return JSON.parse(localStorage.getItem('user')).email;
    } else {
      return null;
    }
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(userName: string, password: string): Observable<any>{
    let logged = new Subject<any>();

    let httpParams = new HttpParams()
    .set('userName', userName)
    .set('password', password);
    this.http.get<any>("/api/user/login", {params: httpParams}).subscribe(response => {
      response.fridge = this.mockFridge;
      localStorage.setItem("user", JSON.stringify(response));   
      logged.next(response);
    }, error => {
      logged.error(error);
    });
    return logged.asObservable();

  }

  register(login: string, email: string, password: string): Observable<any>{
    let body: any = {
      userName: login,
      email: email,
      password: password,
    }

    let result = new Subject<any>();

    this.http.post<any>("/api/user", body).subscribe(response => {
      localStorage.setItem("user", JSON.stringify(response));   
      result.next(response);
    }, error => {
      result.error(error);
    });

    return result.asObservable();
  }

  public logout(): Observable<any>{
    return this.http.get<any>("/api/user/logout");
  }


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
}
