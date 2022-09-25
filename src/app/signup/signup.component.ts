import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  subitform! :FormGroup;

  constructor(private fb:FormBuilder){
    
    this.subitform =this.fb.group({
      title:['',Validators.required],
    firstName: ['' , Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
    email: ['' , Validators.compose([Validators.required,Validators.email])],
    lastName: ['' , Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
    password: ['' , Validators.compose([Validators.required,Validators.minLength(6)])],
    confirmpassword: ['' , Validators.compose([Validators.required,Validators.minLength(6)])],  

    })

  }

  
  ngOnInit(){

  }

  
  signup(){
    return alert('hello please login now ')
  }





}

///data hama obj ma mltaha es laa esa array ma kar dya ha 