import { createAction, createReducer, on, props, Action } from "@ngrx/store";
import { ListUsers, User } from 'src/app/entities/users';
import { UsersService } from 'src/app/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

//#region actions

const loadUsers = createAction("[USERS] Load_users");
const usersLoadedSuccessfully = createAction("[USERS] Users_loaded_successfully", props<{listUsers: ListUsers<User>}>());
const usersLoadedUnSuccessfully = createAction("[USERS] Users_loaded_unsuccessfully");

//#endregion

//#region reducer

interface UserState {
    table: {
        info: ListUsers<User>,
        loading: boolean;
        failed: boolean;
        loaded: boolean;
        msg: string;
    }
}

const initialState: UserState = {
    table: {
        info: {
            data: [],
            page: null,
            perPage: null,
            total: null,
            totalPages: null
        },
        failed: false,
        loaded: false,
        loading: false,
        msg: ""
    }
}

const _userReducer = createReducer(initialState,
        on(loadUsers, (state) => ({
            table: {
                ...state.table,
                loading: true,
                failed: false,
                msg: '',
                loaded: false
            }
        })),
        on(usersLoadedSuccessfully, (state, payload) => ({
            ...state,
            table: {
                info: payload.listUsers,
                loading: false,
                failed: false,
                msg: 'success',
                loaded: true
            }
        })),
        on(usersLoadedUnSuccessfully, (state) => ({
            table: {
                ...state.table,
                loading: false,
                failed: true,
                msg: '',
                loaded: true
            }
        }))
    )

const userReducer = (action, state) => _userReducer(action, state);

//#endregion


//#region effect
@Injectable()
class userEffects {
    loadUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadUsers.type),
            delay(3000),
            switchMap(() => this._userServices.getUsers(1)
                .pipe(
                    map(res => usersLoadedSuccessfully({ listUsers: res })),
                    catchError(() => of(usersLoadedUnSuccessfully()))
                )
            )
        ))

    constructor(private actions$: Actions,private _userServices: UsersService){}
}

//#endregion

export { loadUsers, usersLoadedSuccessfully, usersLoadedUnSuccessfully, UserState, userReducer, userEffects };