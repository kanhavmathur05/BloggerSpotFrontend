import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { UserDetails } from './model/userdetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blogger Spot';
  showLogin:boolean=false;
  showLogout:boolean=false;
  user:boolean=false;
  username:String;
  constructor(private router:Router)
  {
    if(sessionStorage.userdetail==null)
    {
    this.showLogin=true;
    this.user=false;
    }
    else
    {
      this.showLogout=true;
      this.username=JSON.parse(sessionStorage.userdetail).userName;
      this.user=true;
    }
  }

  logout():void
  {
    sessionStorage.clear();
    window.location.href="http://localhost:4200/login";
//    window.location.reload();
//    this.router.navigate(['login']);
  }
}