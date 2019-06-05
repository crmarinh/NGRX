import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import { SumarAction, RestarAction } from './store/reducers';

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
      this.numero = respuesta;
    });
  }

  sumar() {
    this.storeAritmetica.dispatch(new SumarAction());
  }

  restar() {
    this.storeAritmetica.dispatch(new RestarAction());
  }

}
