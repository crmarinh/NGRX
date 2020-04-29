import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import { sumar, restar } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGRX';
  numero: number;

  constructor(private storeAritmetica: Store<AppState>) {
    this.storeAritmetica.select('aritmetica').subscribe(respuesta => {
      this.numero = respuesta.value;
    });
  }

  sumar() {
    this.storeAritmetica.dispatch(sumar());
  }

  restar() {
    this.storeAritmetica.dispatch(restar());
  }

}
