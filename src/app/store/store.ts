import { ActionReducerMap } from '@ngrx/store';
import { reducerAritmetica } from './reducers';

export interface AppState {
  aritmetica: number;
}

export const appReducers: ActionReducerMap<AppState> = {
  aritmetica: reducerAritmetica
};
