import { Action } from '@ngrx/store';

// Acciones
export const SUMAR = '[Sumar] sumar uno a un numero';
export const RESTAR = '[Restar] restar uno a un numero';
export const MULTIPLICAR = '[MULTIPLICAR] Multiplicar por dos';
export const DIVIDIR = '[DIVIDIR] Dividir en dos';

export class SumarAction implements Action {
  type = SUMAR;
}

export class RestarAction implements Action {
  type = RESTAR;
}

export class MultiplicarAction implements Action {
    type = MULTIPLICAR;
}

export class DividirAction implements Action {
    type = DIVIDIR;
}


type Acciones = SumarAction | RestarAction | MultiplicarAction | DividirAction;

// Reducer
export function reducerAritmetica(state: number = 2, accion: Acciones) {
  if (accion.type === SUMAR) {
    return (state = state + 1);
  }
  if (accion.type === RESTAR) {
    return (state = state - 1);
  }
  if (accion.type === MULTIPLICAR) {
      return state = state * 2;
  }
  if (accion.type === DIVIDIR) {
      return state = state / 2;
  }
  return state;
}
