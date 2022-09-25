import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform! :FormGroup;
  constructor(private fb:FormBuilder) {

    this.loginform =this.fb.group({
    email: ['' , Validators.compose([Validators.required,Validators.email])],
    password: ['' , Validators.compose([Validators.required,Validators.minLength(6)])]

    })

   }

  ngOnInit(): void {
  }

  login(){
    alert('Login Successfull')
  }

}
