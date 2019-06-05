import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { MultiplicarAction } from '../store/reducers';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent {

  numero: number;

  constructor(private storeAritmetica: Store<AppState>) {
    this.storeAritmetica.select('aritmetica').subscribe(respuesta => {
      this.numero = respuesta;
    });
   }

   multiplico() {
    this.storeAritmetica.dispatch(new MultiplicarAction());
   }

}
