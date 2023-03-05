import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string = localStorage.getItem('token');
    request = request.clone({headers:request.headers.set('Authorization','Bearer' + token )});
    request = request.clone({headers:request.headers.set('Content-Type','application/json')});
    request = request.clone({headers:request.headers.set('Accept','application/json')});
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
          if(error && error.status === 401){
            console.log("Error 401 UNAUTHORIZED")
          }
          const err = error.error.message || error.statusText;
          return throwError(error);
      })
    )
  }
}
