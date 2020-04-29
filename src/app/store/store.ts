import { ActionReducerMap } from '@ngrx/store';
import { aritmeticaReducer, Aritmetica } from './reducers';

export interface AppState {
  aritmetica: Aritmetica;
}

export const appReducers: ActionReducerMap<AppState> = {
  aritmetica: aritmeticaReducer
};
