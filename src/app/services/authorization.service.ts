import {Injectable} from '@angular/core';
import {UserEntity} from '../core/user-entity';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {
  }

  public login(user: UserEntity): void {
    user.token = btoa(user.login) + ':' + btoa(user.password);
    localStorage.setItem(user.login, JSON.stringify(user));
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    return localStorage.length > 0;
  }

  public getUserInfo(): string {
    return JSON.parse(localStorage.getItem(localStorage.key(0))).login;
  }
}
