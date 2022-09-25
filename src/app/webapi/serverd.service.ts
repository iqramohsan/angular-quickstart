import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerdService {
  private SERVER_URL = "http://localhost:4200/api"

  constructor(private httpd: HttpClient) { }
  
  getUser(){
    return this.httpd.get(`${this.SERVER_URL}/users`)
  }

}


//yaha par get put ost use karan ha waha esa constructor ma import kara ga and es ka obj bnaya ga 