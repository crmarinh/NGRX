import {createAction, createReducer, on } from '@ngrx/store';

// Acciones
export const sumar = createAction('[Sumar] sumar uno a un numero');
export const restar = createAction('[Restar] restar uno a un numero');
export const multiplicar = createAction('[MULTIPLICAR] Multiplicar por dos');
export const dividir = createAction('[DIVIDIR] Dividir en dos')

export interface Aritmetica {
  value: number
}

const initialstate: Aritmetica = {
  value: 0
}

const _aritmeticaReducer = createReducer(initialstate, 
  on(sumar, state => ({...state, value: state.value + 1})),
  on(restar, state => ({...state, value: state.value - 1})),
  on(multiplicar, state => ({...state, value: state.value * 2})),
  on(dividir, state => ({...state, value: state.value / 2})));


export const aritmeticaReducer = (state, action) => _aritmeticaReducer(state,action);
