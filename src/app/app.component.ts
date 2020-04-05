import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';
import {filter, map} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'startProject';

  public login: string;
  public isAuthorised: boolean;


  constructor(public authorizationService: AuthorizationService, private router: Router, private cdRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        const snapshot = this.router.routerState.snapshot;
        if (snapshot.url !== null) {
          const matchId = snapshot.url.match('(login|course)');
          if (matchId != null) {
            this.authorizationService.isAuthenticated().subscribe( x => this.isAuthorised = x);
            this.authorizationService.getUserInfo().subscribe( x => this.login = x);
          }
        }
      });  }


}
