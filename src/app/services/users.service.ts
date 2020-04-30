import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ListUsers, UserResponse } from '../entities/users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  public getUsers(page:number):Observable<ListUsers<User>> {
    return this.http.get<ListUsers<UserResponse>>(`https://reqres.in/api/users?page=${page}`).
    pipe(map<ListUsers<UserResponse>, ListUsers<User>>(resp => ({
      ...resp,
      data: resp.data.map<User>(this.getUser)
    })));
  }

  private getUser(user:UserResponse): User {
    const { avatar, id, email, first_name, last_name } = user;
    return {
      avatar,
      email,
      id,
      firstName: first_name,
      lastName: last_name
    }
  }

}
