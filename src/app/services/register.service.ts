import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/userdetails';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(userdetail:UserDetails):Observable<UserDetails>
  {
    console.log(userdetail.userName);
    console.log(userdetail.onlineStatus);
    console.log(userdetail.role);
    return this.http.post<UserDetails>('http://localhost:9002/collaborationProjectMiddleware/registerUser/',userdetail);
  }
}
