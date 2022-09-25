import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import{MyContact} from '../models/myContact'
import { MyGroup } from '../models/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  delete(contactId: any) {
    throw new Error('Method not implemented.');
  }
  private baseurl:string = `http://localhost:4000`

  constructor(private http:HttpClient) { }
//GET ALL DATA 
public getAllContacts():Observable<MyContact>{

  let dataurl:string = `${this.baseurl}/contacts`;
  //  let dataurl:string = `$http://localhost:4000/contacts`

  //now return data 
  return this.http.get<MyContact>(dataurl).pipe(catchError(this.handleError))

}

// SINGLE DATA GET 
public getContact(contactId:string):Observable<MyContact> {
  let dataurl :string =  `${this.baseurl}/contacts/${contactId}`;
  return this.http.get<MyContact>(dataurl).pipe(catchError(this.handleError))
}



//create new contact

public CreateContact(contact:MyContact):Observable<MyContact>{
  let dataurl :string =  `${this.baseurl}/contacts`;
  return this.http.post<MyContact>(dataurl,contact).pipe(catchError(this.handleError))

}


//update contact 
public UpdateContact(contact:MyContact, contactId:string):Observable<MyContact>{

  let dataurl :string =  `${this.baseurl}/contacts/${contactId}`;
  return this.http.put<MyContact>(dataurl, contact).pipe(catchError(this.handleError))
}


//delete contact contact 
public DeleteContact( contactId:string):Observable<MyContact>{
  let dataurl :string =  `${this.baseurl}/contacts/ ${contactId}`;
  return this.http.delete<MyContact>(dataurl).pipe(catchError(this.handleError))
}



//all getAllGroups 
public getAllGroups():Observable<MyGroup> {
  let dataurl :string =  `${this.baseurl}/groups`;
  return this.http.get<MyGroup>(dataurl).pipe(catchError(this.handleError))
}

//get  SINGLE  Groups 

public getGroups(contact:MyContact):Observable<MyGroup> {
  let dataurl :string =  `${this.baseurl}/groups ${contact.groupId}`;
  return this.http.get<MyGroup>(dataurl).pipe(catchError(this.handleError))
}





  //client side saya serversaes message ma akhaga 
public handleError (error:HttpErrorResponse){

  let errorMessage:string=''
  if (error.error instanceof ErrorEvent){
  errorMessage = `Error :${error.error.message}`
  
  }
  else{
    //server sideerror
     
    errorMessage = `Status: ${error.status} \n Message: ${error.message} `
      
   }

     return throwError(errorMessage)
}

}
