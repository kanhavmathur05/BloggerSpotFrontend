import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetails } from '../model/userdetails';
import { RegisterService } from '../register.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router) { }
  userdetail:any={}; //If you dont use 'any' it will give you error in console for ngModel.
  registerUser(userdetail):void
  {
    console.log(this.userdetail);
    
    this.registerService.registerUser(this.userdetail).subscribe(
      (data)=>{
        this.userdetail=data;
        console.log(data),
        this.router.navigate(['login'])},
        (error)=>console.log(error.status)
    );
    console.log("After Service Method");
  }

  ngOnInit() {
  }

}
