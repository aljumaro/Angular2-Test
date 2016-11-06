import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja directory!';

  ninja = {
    name: "Test",
    belt: "Orange"
  }

  yell(e){
    alert('Yelling');
    console.log(e);
  }
}
