import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color = 2

  handleColor(val :number){
    this.color = val
  }
  handleInput(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
  }


}
