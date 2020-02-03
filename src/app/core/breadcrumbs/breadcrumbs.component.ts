import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

}
