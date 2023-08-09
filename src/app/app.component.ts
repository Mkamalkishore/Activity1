import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // showmovies=true;

  constructor(private router:Router){
    
  }
  title = 'task1';
  isDisabled: Boolean=false;
  //dynamicTXT:string='this is dynamic text ';

  btnclick(){
    console.log("I was clicked");
  }

  Loginclick(){
    this.router.navigate(['login']);
  }

  Dashboardclick(){
    this.router.navigate(['dashboard']);
  }

}
