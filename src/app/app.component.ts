import { Component } from '@angular/core';
// import - include other code / lib

// decorator
@Component({
  selector: 'app-root', // this decides how I connect
  // use this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authorBookAngular'; // is this typescript?

}
