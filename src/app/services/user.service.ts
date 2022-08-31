import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) { }

    urlSignin = "http://localhost:3000/signin"
    urlRegister = "http://localhost:3000/register"

    signin(usuario: User):Observable<any> {
      return this.httpClient.post(this.urlSignin, JSON.stringify(usuario) ,  {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      })
    }


    register(usuario: User):Observable<any> {
      return this.httpClient.post(this.urlRegister, JSON.stringify(usuario) ,  {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      })
    }
}
