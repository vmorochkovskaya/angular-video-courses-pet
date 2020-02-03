import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';
import {UserEntity} from "../../user-entity";
import {User} from "../../classes/user";

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

  constructor(private authenticationService: AuthorizationService) {
  }

  ngOnInit() {
  }

  logIn(): void {
    const user: UserEntity = new User();
    user.login = this.login;
    user.password = this.password;
    this.authenticationService.login(user);
  }
}
