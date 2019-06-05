import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { DividirAction } from '../store/reducers';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html',
  styleUrls: ['./dividir.component.css']
})
export class DividirComponent {
  numero: number;

  constructor(private storeAritmetica: Store<AppState>) {
    this.storeAritmetica.select('aritmetica').subscribe(respuesta => {
      this.numero = respuesta;
    });
  }

  dividiendo() {
    this.storeAritmetica.dispatch(new DividirAction());
  }
}
