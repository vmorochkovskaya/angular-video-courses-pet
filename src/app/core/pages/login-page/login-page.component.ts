import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';
import {UserEntity} from '../../entities/user-entity';
import {User} from '../../entities/classes/user';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input()
  public login: any;

  @Input()
  public password: any;

  private token: Observable<any>;

  constructor(private authenticationService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
  }

  logIn(): void {
    const user: UserEntity = new User();
    user.login = this.login;
    user.password = this.password;
    this.token = this.authenticationService.login(user);
    console.log(localStorage.getItem('token1') + '8888888');
    this.token.subscribe(token => {
      console.log(token + 'fffff');
      // if (token != null) {
      // }
      this.router.navigate(['/courses-page']);
    });

    // this.router.navigate(['/courses-page']);
  }
}
