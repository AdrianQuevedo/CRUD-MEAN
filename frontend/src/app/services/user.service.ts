import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];
  readonly URL_API = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  getUsers() {
    return this.http.get(this.URL_API).subscribe();
  }

  postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  putUser(user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(user: User) {
    return this.http.delete(this.URL_API + `/${user._id}`);
  }



}
