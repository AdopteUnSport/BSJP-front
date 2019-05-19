import { Injectable } from '@angular/core';

export interface UserServiceInterface {

  hasUser() : boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface{

  hasUser() {
    return false;
  }

  constructor() { }
}
