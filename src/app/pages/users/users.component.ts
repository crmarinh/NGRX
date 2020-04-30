import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUsers, User } from 'src/app/entities/users';
import { pluck, delay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/store';
import { loadUsers, UserState } from "./redux";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users$: Observable<any>;

  constructor(private store$: Store<AppState>) {
    this.store$.dispatch(loadUsers())  
  }

  ngOnInit() {
    this.users$ = this.store$.pipe(select("pageUser"), pluck('table'));
  }

}
