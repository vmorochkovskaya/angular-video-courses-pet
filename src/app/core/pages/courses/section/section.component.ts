import {
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {of, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public searchText: string;

  private searchSubscription: Subscription;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();

  const
  obs = {
    next: (x: string) => (this.onSearch.emit(this.searchText))
  };


  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    console.log(this.searchText);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  change() {
    this.searchSubscription = of(this.searchText).pipe(filter((query) => query.length > 3),
      debounceTime(600000),
      distinctUntilChanged()).subscribe(this.obs);
  }

  ngOnDestroy(): void {
    // this.searchSubscription.unsubscribe();
  }
}
