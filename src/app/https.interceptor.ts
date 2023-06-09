import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let users_jwt = localStorage ['Userjwt'];
    if(users_jwt){
        // console.log(users_jwt);
        return next.handle(request.clone({
            setHeaders:{authorization: `Bearer ${users_jwt}`}
        }))
    }else{

        return next.handle(request);
    }
  }
}
