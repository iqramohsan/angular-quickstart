import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {ContactService} from '../service/contact.service'

@Component({
  selector: 'app-contact-manger',
  templateUrl: './contact-manger.component.html',
  styleUrls: ['./contact-manger.component.css']
})
export class ContactMangerComponent implements OnInit {

  //3 variable 
  public loading:boolean = false;
  public contact:any;
  public errorMessage:string | null = null;
box: TemplateRef<NgIfContext<boolean>>;

  constructor(public cantService:ContactService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cantService.getAllContacts().subscribe((data:any)=>{
      this.contact =data;
      this.loading =false;


    },
     (error)=> {
      this.errorMessage = error;
      this.loading = false;

    })
  }


 


  deletrec(val:any){
    
    this.cantService.DeleteContact(val).subscribe((data:any)=>{
      
    },
    (error: string | null)=>{
      this.errorMessage = error;
      
    }
    )
  
}


  
}

//2 ab ham servises ku call kara ga contructor ma 
//ab ngonit ma method define kara ga 
//yaha hamdataku subcribe kara ga