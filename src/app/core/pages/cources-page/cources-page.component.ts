import {
  Component, Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-cources-page',
  templateUrl: './cources-page.component.html',
  styleUrls: ['./cources-page.component.scss']
})
export class CourcesPageComponent implements OnInit {

  @Input()
  public searchCourseTitle: string;

  constructor() {
    console.log(`courses page constructor`);
    this.searchCourseTitle = '';
  }

  ngOnInit() {
    console.log(`courses page ngOnInit`);
    this.searchCourseTitle = '';
  }

  update(id: number) {
    console.log(id);
  }

  refreshSeearch(text: string) {
    this.searchCourseTitle = text;
  }

}
