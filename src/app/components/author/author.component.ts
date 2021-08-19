import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAuthor } from 'src/app/interface/IAuthor';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors : IAuthor [] = [];
  author !: IAuthor;


  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });
  // http : AuthorService
  constructor(private http:AuthorService) { } //DI , every time I use a Service write it here

  ngOnInit(): void {
    console.log(
      this.http.getAuthorsHardcoded());
      // console.log(
      this.getAuthors();
      // this is from our API - skriver det bare lige i stedet for at sige det....
     // version 1
      // let temp = this.http.getAuthors().subscribe((data)=>{
      //   console.log(data);

      // })

      // this.getAuthorById(4);
      // this.deleteAuthor(4); // lack some update we find out later
      // let temp : IAuthor = {
      //   // id : 12, // auto_increment  / identity
      //   firstname : "Ida",
      //   lastname : "Gulerod"
      // }
      // this.createAuthor(new IAuthor(){firstname:"bb", lastname:"hhhh"}); no can doooo
      //this.createAuthor(temp);
  }
  //version 2 this has to be called somewhere from button whatever..
  getAuthors(){
    this.http.getAuthors().subscribe((data)=>
      //get data in a container{}
      {console.log(data);

      this.authors = data;}
    )
  }
  getAuthorById(authorId:string){

    return this.http.getAuthorById(parseInt(authorId)).subscribe(data => {
      console.log(data);
      this.author = data;
    });
    // convert to number
    // let tal : number = parseInt(authorId);
    // console.log(tal);

   // this doesnt return an obj
  }
  deleteAuthor(authorIdToDelete: number):void{
   this.http.deleteAuthor(authorIdToDelete).subscribe(()=>this.getAuthors()); // why the hack? its a callback method
    // this is not implemented properly but works... we dont update the screen
    //-getauthor() or something else
    //this.getAuthors(); // if my subscribe takes longer time than this call its run before subscribe
    // is done and nothing happens
  }
  createAuthor(authorToCreate:IAuthor){
    //console.log(authorToCreate);
    //console.log(this.profileForm.value);


    return this.http.createAuthor(this.profileForm.value).subscribe(data => console.log(data));

  }
}
