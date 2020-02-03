import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourcesPageComponent} from './core/pages/cources-page/cources-page.component';

const appRoutes: Routes = [
  {path: 'cources-page', component: CourcesPageComponent},
  {path: '', redirectTo: '/cources-page', pathMatch: 'full'}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
