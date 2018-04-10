import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }
  users = [];

  addUsers(user) {
    this.users.push((user));
  }
  getUsers() {


    console.log(this.users);

    return this.users;
  }

}
