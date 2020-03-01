import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginPageModule} from './core/pages/login-page/login-page.module';
import {CourcesPageComponent} from './core/pages/courses/cources-page/cources-page.component';
import {CoursesModule} from "./core/pages/courses/courses.module";

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    LoginPageModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  exports: []
,
  bootstrap: [AppComponent]
})
export class AppModule {
}
