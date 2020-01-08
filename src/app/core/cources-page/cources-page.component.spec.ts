import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourcesPageComponent} from './cources-page.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SectionComponent} from '../section/section.component';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {LogoComponent} from '../logo/logo.component';
import {FormsModule} from '@angular/forms';

import {By} from '@angular/platform-browser';

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

  it('should emit update action once deleted in list', () => {
    const spy = spyOn(component, 'update');
    fixture.debugElement.query(By.css('app-todo-list')).triggerEventHandler('onDeleteInList',
      1);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should console log id', () => {
    const spy = spyOn(console, 'log');
    component.update(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should console log ngOnInit', () => {
    const spy = spyOn(console, 'log');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should onClick when load more is clicked', () => {
    const spy = spyOn(component, 'onClick');
    fixture.debugElement.query(By.css('a[id="load_more"]')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
