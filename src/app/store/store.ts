import { ActionReducerMap } from '@ngrx/store';
import { aritmeticaReducer, Aritmetica } from './reducers';
import { UserState, userReducer } from '../pages/users/redux';

export interface AppState {
  aritmetica: Aritmetica;
  pageUser: UserState
}

export const appReducers: ActionReducerMap<AppState> = {
  aritmetica: aritmeticaReducer,
  pageUser: userReducer
};
