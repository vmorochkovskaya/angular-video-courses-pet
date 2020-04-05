import {Component, Input, OnInit} from '@angular/core';
import {VideoCourse} from '../../../entities/classes/video-course';
import {CoursesService} from '../../../../services/courses.service';
import {CourseAuthor} from "../../../entities/classes/course-author";
import {Router} from "@angular/router";

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

  public date: string;

  public duration: number;

  constructor(private coursesService: CoursesService, private router: Router) {
  }

  ngOnInit() {
  }

  saveDate(date: string) {
    this.date = date;
  }

  saveDuration(duration: number) {
    this.duration = duration;

  }

  addCourse() {
    const course = new VideoCourse();
    course.date = this.date;
    course.description = this.description;
    course.name = this.title;
    let a = Math.floor(100000 + Math.random() * 900000).toString();
    a = String(a);
    a = a.substring(0, 4);
    course.id = +a;
    console.log(a);
    const authors = [];
    const author = new CourseAuthor();
    author.id = +a.toString().substring(0, 4);
    author.name = 'fsdfdfsdfs';
    authors.push(author);
    course.authors = authors;
    this.coursesService.addCourse(course).subscribe();
    this.router.navigate(['/courses-page']);
  }

}
