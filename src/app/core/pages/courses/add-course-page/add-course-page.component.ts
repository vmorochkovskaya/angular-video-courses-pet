import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  @Input()
  public title: any;

  @Input()
  public description: any;

  constructor() {
  }

  ngOnInit() {
  }

}
