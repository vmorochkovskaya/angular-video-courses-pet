import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authorizationService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }
}
