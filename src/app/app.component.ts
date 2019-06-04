import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGRX';
  numero: number;

  constructor() {
    this.numero = 0;
  }

  multiplicar($event) {
    this.numero = $event;
  }

}
