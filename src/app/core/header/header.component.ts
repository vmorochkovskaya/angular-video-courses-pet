import {Component, Input, OnInit} from '@angular/core';
import {UserEntity} from '../user-entity';
import {User} from '../classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public user: UserEntity;

  constructor() {
  }

  ngOnInit() {
    this.user = new User('Ivanov', 'Ivan');
  }
}
