import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { dividir } from '../store/reducers';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html',
  styleUrls: ['./dividir.component.css']
})
export class DividirComponent {
  numero: number;

  constructor(private storeAritmetica: Store<AppState>) {
    this.storeAritmetica.select('aritmetica').subscribe(respuesta => {
      this.numero = respuesta.value;
    });
  }

  dividiendo() {
    this.storeAritmetica.dispatch(dividir());
  }
}
