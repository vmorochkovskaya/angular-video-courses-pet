import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('SectinComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should keep input and searchText in sync', () => {
    const inputDe = fixture.debugElement.query(By.css('input[placeholder="Search"]'));
    const inputEl = inputDe.nativeElement;
    const valueToUpdate = 'Updated';
    inputEl.value = valueToUpdate;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchText).toEqual(valueToUpdate);
  });

  it('should listen for form changes', () => {
    const spy = spyOn(component, 'onClick');
    fixture.debugElement.query(By.css('a[name-entity.ts="Search"]')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should console log in onCLick', () => {
    const spy = spyOn(console, 'log');
    const valueToUpdate = 'Some text';
    component.searchText = valueToUpdate;
    component.onClick();
    expect(spy).toHaveBeenCalledWith(valueToUpdate);
  });
});
