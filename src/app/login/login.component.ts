import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/userdetails';
import { LoginService } from '../services/login.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdetail:any={};
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  login():void
  {
    console.log(this.userdetail);

this.loginService.loginUser(this.userdetail).subscribe(
      (data)=>{
        this.userdetail=data;
        sessionStorage.setItem("userdetail",JSON.stringify(data))
        console.log(data),
//    this.router.navigate(['blogs']);
    window.location.href="http://localhost:4200/blogs",
        (error)=>console.log(error.status)
      }
    );
  }
}