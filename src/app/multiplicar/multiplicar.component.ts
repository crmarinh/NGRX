import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent {

  @Input() numero: number;
  @Output() multiplicar: EventEmitter<number>;

  constructor() {
    this.numero = 1;
    this.multiplicar = new EventEmitter();
   }

   multiplico() {
     this.numero = this.numero * 2;
     this.multiplicar.emit(this.numero);
   }

   dividir($event) {
     this.numero = $event;
     this.multiplicar.emit(this.numero);
   }

}
