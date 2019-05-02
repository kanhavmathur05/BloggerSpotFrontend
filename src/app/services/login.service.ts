import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/userdetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser(userdetails:UserDetails):Observable<UserDetails>
  {
    console.log(userdetails.userName);
    console.log(userdetails.password);
    return this.http.post<UserDetails>('http://localhost:9002/collaborationProjectMiddleware/login/',userdetails);
  }

  logoutUser()
  {
    
  }
}
