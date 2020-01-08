import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {SectionComponent} from './section/section.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {CourcesPageComponent} from './cources-page/cources-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TodoListComponent,
    TodoListItemComponent,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourcesPageComponent,
    BreadcrumbsComponent],
  exports: [
    TodoListComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CourcesPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule {
}
