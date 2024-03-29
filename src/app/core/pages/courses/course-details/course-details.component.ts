import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CoursesService} from '../../../../services/courses.service';
import {Observable} from 'rxjs';
import {Course} from '../../../entities/course';
import {VideoCourse} from '../../../entities/classes/video-course';

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
    let courseTmp: Course;
    courseTmp = new VideoCourse();
    this.course$.subscribe(course => {
      courseTmp.id = course.id;
    });
    courseTmp.name = this.title;
    courseTmp.description = this.description;
    courseTmp.length = this.duration;
    courseTmp.date = this.date;
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
