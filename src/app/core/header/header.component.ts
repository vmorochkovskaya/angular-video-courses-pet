import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() public login: string;
  @Input() public isAuthorised: boolean;

  constructor(public authorizationService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }

}
