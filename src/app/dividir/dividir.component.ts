import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html',
  styleUrls: ['./dividir.component.css']
})
export class DividirComponent {
  @Input() numero: number;
  @Output() dividir: EventEmitter<number>;

  constructor() {
    this.numero = 0;
    this.dividir = new EventEmitter();
  }

  dividiendo() {
    this.numero = this.numero / 2;
    this.dividir.emit(this.numero);
  }
}
