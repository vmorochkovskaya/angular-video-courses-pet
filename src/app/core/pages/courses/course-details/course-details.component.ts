import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {first, switchMap} from 'rxjs/operators';
import {CoursesService} from '../../../../services/courses.service';
import {Observable} from 'rxjs';
import {Course} from '../../../course';
import {VideoCourse} from '../../../classes/video-course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;
  @Input()
  public title: any;

  @Input()
  public description: any;

  @Input()
  public duration: any;

  @Input()
  public date: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService
  ) {
  }

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourseById(params.get('id')))
    );
  }

  save() {
    // tslint:disable-next-line:prefer-const
    console.log('Save');
    let courseTmp: Course;
    courseTmp = new VideoCourse();
    this.course$.subscribe(course => courseTmp.id = course.id);
    courseTmp.title = this.title;
    courseTmp.description = this.description;
    courseTmp.duration = this.duration;
    courseTmp.creationDate = this.date;
    this.service.updateCourse(courseTmp);
    this.router.navigate(['/courses-page']);
  }

  updateDate(date: string) {
    this.date = date;
  }

  updateDuration(duration: number) {
    this.duration = duration;
  }
}
