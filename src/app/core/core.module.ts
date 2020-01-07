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
import {LoadMoreComponent} from './load-more/load-more.component';


@NgModule({
  declarations: [TodoListComponent,
    TodoListItemComponent,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourcesPageComponent,
    BreadcrumbsComponent,
  LoadMoreComponent],
  exports: [
    TodoListComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CourcesPageComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule {
}
