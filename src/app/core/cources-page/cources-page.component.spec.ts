import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourcesPageComponent} from './cources-page.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SectionComponent} from '../section/section.component';
import {LoadMoreComponent} from '../load-more/load-more.component';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {LogoComponent} from '../logo/logo.component';
import {FormsModule} from '@angular/forms';

describe('CourcesPageComponent', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourcesPageComponent,
        TodoListComponent,
        TodoListItemComponent,
        HeaderComponent,
        FooterComponent,
        SectionComponent,
        LoadMoreComponent,
        BreadcrumbsComponent,
        LogoComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
