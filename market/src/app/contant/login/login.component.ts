import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userform=new FormGroup({
    usernames:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])

  });
  get getUserName() {
    return this.userform.controls['usernames'];
  }

  get getPassword() {
    return this.userform.controls['pass'];
  }

constructor(private router:Router){}
go(){
  if(this.getPassword.hasError("required") || this.getUserName.hasError("required")){}else
  this.router.navigate(['/items'])
}
}
