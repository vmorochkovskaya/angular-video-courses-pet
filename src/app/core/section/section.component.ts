import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input()
  public searchText: any;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    console.log(this.searchText);
    this.onSearch.emit(this.searchText);
  }
}
