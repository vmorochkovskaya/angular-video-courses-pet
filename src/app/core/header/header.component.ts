import {Component, Input, OnInit} from '@angular/core';
import {UserEntity} from '../user-entity';
import {User} from '../classes/user';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.authorizationService.logout();
    console.log('log out');
  }
}
