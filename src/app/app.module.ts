import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginPageModule} from './core/pages/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LoginPageModule
  ],
  providers: [],
  exports: []
,
  bootstrap: [AppComponent]
})
export class AppModule {
}
