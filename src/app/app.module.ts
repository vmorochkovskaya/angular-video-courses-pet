import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginPageModule} from './core/pages/login-page/login-page.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptors/token-interceptor';
import {LoaderService} from './services/loader.service';
import {LoaderInterceptor} from './core/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    LoginPageModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
