import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { IUserInterface } from './interface/userInterface';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = 'https://gorest.co.in/public/v2/users';
  constructor(private http: HttpClient) { }

  // getUser() : Observable<IUserInterface[]> {
  //   return this.http.get<IUserInterface[]>(this.url);
  // }

  getUser$ = this.http.get<IUserInterface[] | string>(this.url).pipe(tap((item) => console.log(item) ), catchError(error => of(`bad promise ${error}`)));
}
