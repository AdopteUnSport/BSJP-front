import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { Router} from '@angular/router';
import { Ingredient } from '../models/ingredient';

export interface UserServiceInterface {
  isLogged$ : BehaviorSubject<boolean>;
  hasUser() : void;

  getUser() : User;

  getUserName(): string;

  getUserEmail(): string;

  getToken(): string;

  login(userName: string, password: string) :Observable<any>;

  register(login: string, email: string, password: string): Observable<any>;
  update(user : User) : Observable<any>
  logout(): void;
}


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface{
  public isLogged$ = new BehaviorSubject<boolean>(false);
  public isLogged : boolean = false;
  public mockFridge:Ingredient[]=[
    {
      _id : 'azdazazdzdazsqd2qsd15',
      category:{
        _id: "dazdazdazdaz",
        name: "viandes"
      },
      
      name:"bacon",
      quantity:5,
      tags: ["bacon","porc","viande","hallouf"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        _id: "dazdazdazdaz",
        name: "légumes"
      },
      name:"poivrons",
      quantity:5,
      tags: ["légume","piments","legume","piment vert"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        _id: "dazdazdazdaz",
        name: "poissons"
      },
      name:"saumon fumé",
      quantity:1,
      tags: ["poisson","rose","gras","fumé"]
    },
    {
      _id : "azdazazdzdazsqd2qsd15",
      category:{
        _id: "dazdazdazdaz",
        name: "fruits"
      },
      name:"pomme",
      quantity:12,
      tags: ["fruit","pomme","rouge","sucré"]
    }
  ]
  public hasUser(): Observable<boolean> {
    return this.isLogged$.asObservable();
  }
  public getUser() : User {
    console.log(this.isLogged)
    if(this.isLogged) {
      return JSON.parse(localStorage.getItem('user'));
    } else {
      return null;
    }
  }
  public isConnected() :boolean {
    const token =  JSON.parse(localStorage.getItem('token'));
    const refreshtoken =  JSON.parse(localStorage.getItem('refreshtoken'));
    if(token && refreshtoken) {
      if(token.expiresIn < new Date().getTime() && refreshtoken.expiresIn<new Date().getTime()){
        this.isLogged$.next(false)
        return false
      }else{
        this.isLogged$.next(true)
        return true
      }
    } else {
      this.isLogged$.next(false)
      return false
    }
  }
  getUserName(): string{
    if(this.isLogged) {
      return JSON.parse(localStorage.getItem('user')).userName;
    } else {
      return null;
    }
  }

  getUserEmail(): string {
    if(this.isLogged) {
      return JSON.parse(localStorage.getItem('user')).email;
    } else {
      return null;
    }
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(userName: string, password: string) : Observable<any>{
    let logged = new Subject<any>();
    let httpParams = new HttpParams()
    .set('userName', userName)
    .set('password', password);
    this.http.get<any>("/api/user/login", {params: httpParams,observe:"response"}).subscribe(response => {
      const user:User = response.body;
      user.fridge = this.mockFridge;
      console.log(JSON.stringify(response.headers));
      localStorage.setItem("user", JSON.stringify(user));   
      localStorage.setItem("token", response.headers.get("authorization"));   
      localStorage.setItem('refreshtoken', response.headers.get("refreshtoken"));   
      this.isLogged = true;
      this.isLogged$.next(true);
      logged.next(response);
    }, error => {
      this.isLogged$.error(error);
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
  public update(user :User) {
    let updated = new Subject<any>();
    // add body to update
    
    this.http.put<any>("/api/user/"+user._id, user,{observe:"response"}).subscribe(response  => {
      const user:User = response.body as User;
      localStorage.setItem("user", JSON.stringify(user));   
      console.log("test")
      updated.next(response)
    }, error => {
      console.log(error)
      updated.next(error)
    });
    console.log("test2")
    return updated.asObservable();
  }
  public logout(): void{
   this.isLogged$.next(false)
   this.isLogged = false;
   this.http.get<any>("/api/user/logout");
  }


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.isLogged$.next(this.isConnected())
    this.isLogged = this.isConnected();
   }
}
