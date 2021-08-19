import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  // http : AuthorService
  constructor(private http:AuthorService) { } //DI , every time I use a Service write it here

  ngOnInit(): void {
    console.log(
      this.http.getAuthorsHardcoded());
      // console.log(
      //   this.http.getAuthors());
  }

}
