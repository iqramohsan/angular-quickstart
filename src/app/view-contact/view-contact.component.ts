import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from '../models/myContact';
import { MyGroup } from '../models/myGroup';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
public contactId:string |null = null;
public loading: boolean =  false;
public contact:any ={} as MyContact;
public errorMessage:string |null = null;
public group:any = {} as MyGroup;


  constructor(private activatedRoute:ActivatedRoute,

  private contService:ContactService ) { }


  ngOnInit(): void {

    //yaha ham directlyparams map ku sucribe karsakta ha hit kar sakta ha 
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId')
    });
if(this.contactId){
  this.loading=true;
      this.contService.getContact(this.contactId).subscribe(
        (data:MyContact)=>{
          this.contact=data;
          this.loading=false;
          this.contService.getGroups(data).subscribe((data:MyGroup)=>{
            this.group =data;
          })
        },
        (error)=>{
          this.errorMessage=error;
          this.loading=false;

        })
    }

 }


public isNotEmpty(){
  return Object.keys(this.contact).length >0;
}

}
