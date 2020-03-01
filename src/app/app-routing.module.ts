import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/pages/page-not-found/page-not-found.component';
import {LoginPageComponent} from './core/pages/login-page/login-page.component';
import {CoreModule} from './core/core.module';
import {AuthGuard} from './core/pages/courses/auth.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: '/courses-page',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
