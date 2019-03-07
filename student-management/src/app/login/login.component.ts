import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data = {username:"",password:""};
constructor(
  private router: Router) { }
  onLogin(){
  	if(this.data.username == this.data.password){
       
      this.router.navigate(['/dashboard']);
      
  	}else{
  		alert('username / password is not correct.');
  	}
  }
  ngOnInit() {
  }

}
