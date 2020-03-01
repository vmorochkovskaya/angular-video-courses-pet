import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CoursesService} from '../../services/courses.service';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements AfterContentChecked {

  constructor(public authorizationService: AuthorizationService, private coursesService: CoursesService,
              private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title,
              private cd: ChangeDetectorRef) {
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
        console.log(snapshot.url);
        if (snapshot.url !== null) {
          const matchId = snapshot.url.match('(?<=course\\/)\\d');
          if (matchId != null) {
            const id = matchId[0];
            this.titleService.setTitle(this.coursesService.getList().find(course => course.id === +id).title);
          }
        }
      });
  }
}
