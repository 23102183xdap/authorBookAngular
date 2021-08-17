import { Component, OnInit } from '@angular/core';
import { IAuthor } from "src/app/interface/IAuthor";
@Component({
  selector: 'test', // this is the entry to a component
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  name : string = "Valiant";
  age : number = 123;
  name2 : string = "Bo";
  sand : boolean = false;
  author : IAuthor = {
    id : 12,
    firstname : "Ida",
    lastname : "Gulerod"
  }
  authors : IAuthor [] = [
    {id:1, firstname:"Ib", lastname:"Skallesmækker"},
    {id:2, firstname:"Ava", lastname:"SmukkeØjne"},
    {id:23, firstname:"Knud", lastname:"Tud"},
  ];
  // optional in interfaces
  //author : IAuthor = new kan man dette her??
  //vuetify material

  constructor() { }

  ngOnInit(): void {
    console.log("tester lige min log");
    console.log(this.authors);
    console.log(this.authors[0]);
    console.log(this.authors[2].firstname);

    this.firstMethod(); //method call / Invoke
    let value = this.methodReturnANumber();
    console.log(this.methodReturnANumber());

  }
  // define method / declare / create etc.
  firstMethod(){
    console.log("first method!!");
  }
  methodReturnANumber() : number{
    return 12;
  }
  methodReturnString() : string{ return "tekst";}
}
