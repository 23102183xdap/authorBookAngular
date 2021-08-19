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
  url : string = 'https://localhost:44374/api/AuthorsWithoutScaffolding';
  urlGeneral : string = 'https://localhost:44374/api/' ;
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
  getAuthorById(authorId:number):Observable<IAuthor>{
    return this.http.get<IAuthor>(`${this.urlGeneral}authorsWithoutScaffolding/${authorId}`);
  }
  deleteAuthor(authorIdToDelete: number):Observable<IAuthor>{
    return this.http.delete<IAuthor>(`${this.urlGeneral}authorsWithoutScaffolding/${authorIdToDelete}`);
  }
  createAuthor(authorToCreate:IAuthor):Observable<IAuthor>{
    return this.http.post<IAuthor>(`${this.urlGeneral}authorsWithoutScaffolding`,authorToCreate,httpOptions);
  }
  updateAuthor(){} // this is defined by the students, its to difficult for me :P
}
