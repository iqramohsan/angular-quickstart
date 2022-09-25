import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from '../models/myContact';
import { MyGroup } from '../models/myGroup';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading:boolean= false;
  public contactId:string  |null = null;
  public contact:any = {} as MyContact;
  public errorMessage:string  |null = null;
  public group:any = {} as MyGroup;


  constructor(private activatedRouter:ActivatedRoute,
    private contservice:ContactService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactId')
    });
    if(this.contactId){
      this.contservice.getContact(this.contactId).subscribe((data:MyContact)=>{
        this.contact = data;
        this.loading = false;
        this.contservice.getAllGroups().subscribe((data:MyGroup)=>{
this.group = data;

        })
      },
      (error) =>{
        this.errorMessage = error;
        this.loading= false;
      }
      )

    }
  }

  submitUpdate(){
    if(this.contactId){
    this.contservice.UpdateContact(this.contact, this.contactId).subscribe((data:any)=>{
      this.router.navigate(['/']).then();
    },
    (error: string | null)=>{
      this.errorMessage = error;
      this.router.navigate([`/contacts/edit/${this.contactId}`]).then();
    }
    )
  }
}

    
    
  }




  



// constructor pa activate route ku call karaga kasi b compo ka data ku with routug share karta ha .