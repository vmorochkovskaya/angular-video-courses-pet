import {Injectable, Output} from '@angular/core';
import {UserEntity} from '../core/entities/user-entity';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Token} from '../core/entities/token';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  token?: Observable<any> = null;

  constructor(private http: HttpClient) {
  }

  getAuthorizationToken() {
    return localStorage.getItem('token1');
  }

  public login(user: UserEntity) {
    const resp = this.http.post<Token>('http://localhost:3004/auth/login', {login: user.login, password: user.password},
      {observe: 'body', responseType: 'json'});
    // tslint:disable-next-line:no-shadowed-variable
    return resp.pipe(map((resp: Token) => {
        localStorage.setItem('token1', resp.token);
        return resp.token;
      }
    ));
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): Observable<boolean> {
    const tkn = this.getAuthorizationToken();
    if (tkn != null) {
      const resp = this.http.post('http://localhost:3004/auth/userinfo', {token: tkn},
        {observe: 'response'});
      // tslint:disable-next-line:no-shadowed-variable
      return resp.pipe(map((resp: HttpResponse<Response>) => {
          return resp.status === 200;
        }
      ));
    }
    console.log('false');
    return of(false);
  }

  public getUserInfo() {
    const tkn = this.getAuthorizationToken();
    if (tkn != null) {
      return this.http.post<UserEntity>('http://localhost:3004/auth/userinfo', {token: tkn}).pipe(map(entity => {
          console.log(entity.login);
          return entity.login;
        }
      ));
    }
  }
}
