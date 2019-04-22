import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collaboration-Project-FrontEnd';
  showLogin:boolean;
  showLogout:boolean;
  constructor()
  {
    if(sessionStorage.userdetail==null)
    {
    this.showLogin=true;
    this.showLogout=false;
    }
    else
    {
      this.showLogin=false;
      this.showLogout=true;
    }
  }

}