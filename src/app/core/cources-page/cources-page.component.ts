import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-cources-page',
  templateUrl: './cources-page.component.html',
  styleUrls: ['./cources-page.component.scss']
})
export class CourcesPageComponent implements OnInit{

  constructor() {
    console.log(`courses page constructor`);
  }

  ngOnInit() {
    console.log(`courses page ngOnInit`);
  }

  update(id: number) {
    console.log(id);
  }

}
