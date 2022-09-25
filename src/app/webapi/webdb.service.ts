import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { user } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class WebdbService implements InMemoryDbService{

  constructor() { }
  createDb() { 
    let users : user[]= [
      {id:1, title:'Mr', firstName:'mohsan',lastName:'khan',email:'abcd@gmal.com',password:'adsd12',}
    ];
    return {users};
  } 
}
