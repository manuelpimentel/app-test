import { HttpProvider } from './../provider/http.provider';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private provider: HttpProvider
  ) { }

  login(user: User) {
  }
}