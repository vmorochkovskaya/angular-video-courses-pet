import {Component} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'startProject';

  constructor(public authorizationService: AuthorizationService) {
  }
}
