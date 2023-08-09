import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string='';
  password: string='';

  Login(){
    if(this.userId==='admin'&&this.password==='123'){
      console.log('Login successful');
    }else{
      console.log('Login attempt failed');
    }
  }

}
