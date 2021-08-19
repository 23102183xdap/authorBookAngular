import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuthor } from '../interface/IAuthor';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
// define the routes to endpoints
// getAuthors()
// getAuthorById()
// createAuthor()
export class AuthorService {

  // url to my api...
  url : string = 'https://localhost:44374/api/AuthorsWithoutScaffold';

  constructor(private http:HttpClient) { } // create a property with name http

  getAuthorsHardcoded():IAuthor[]{
    return [
      {id:1, firstname:"Ib", lastname:"Skallesmækker"},
      {id:2, firstname:"Ava", lastname:"SmukkeØjne"},
      {id:23, firstname:"Knud", lastname:"Tud"},
    ];
  }
  getAuthors():Observable<IAuthor[]>{
    return this.http.get<IAuthor[]>(this.url);
  }

}
