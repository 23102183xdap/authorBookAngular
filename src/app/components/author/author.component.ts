import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interface/IAuthor';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors : IAuthor [] = [];


  // http : AuthorService
  constructor(private http:AuthorService) { } //DI , every time I use a Service write it here

  ngOnInit(): void {
    console.log(
      this.http.getAuthorsHardcoded());
      // console.log(
      //   this.http.getAuthors());
      // this is from our API - skriver det bare lige i stedet for at sige det....
     // version 1
      // let temp = this.http.getAuthors().subscribe((data)=>{
      //   console.log(data);

      // })
  }
  //version 2 this has to be called somewhere from button whatever..
  getAuthors(){
    this.http.getAuthors().subscribe((data)=>
      //get data in a container
      this.authors = data
    )
  }

}
