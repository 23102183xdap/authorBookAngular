import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from '../interface/IAuthor';


@Injectable({
  providedIn: 'root'
})
// define the routes to endpoints
// getAuthors()
// getAuthorById()
// createAuthor()
export class AuthorService {

  constructor(private http:HttpClient) { } // create a property with name http

  getAuthors():IAuthor[]{
    return [
      {id:1, firstname:"Ib", lastname:"Skallesmækker"},
      {id:2, firstname:"Ava", lastname:"SmukkeØjne"},
      {id:23, firstname:"Knud", lastname:"Tud"},
    ];
  }

}
