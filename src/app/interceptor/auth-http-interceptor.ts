import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        
        const authorization = localStorage.getItem("token")
        const refreshtoken = localStorage.getItem("refreshtoken")
        let authReq
        if(authorization || refreshtoken){
           authReq = req.clone({
            headers: req.headers
            .set('Content-type', 'application/json')
            .set("authorization",authorization)
            .set("refreshToken",refreshtoken)
          });
        }else{
           authReq =req
        }
        
          console.log("req"+JSON.stringify(authReq)); // to do check middleware back
          return next.handle(authReq);
    }
}
