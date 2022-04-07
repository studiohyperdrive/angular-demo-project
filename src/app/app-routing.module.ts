import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './modules/core/pages/home/home.page';
import { LoggedInGuard } from './modules/auth/guards/logged-in/logged-in.guard';

const routes: Routes = [{
  path: '',
  component: HomePage,
}, {
  path: 'launches',
  canActivate: [LoggedInGuard],
  loadChildren: () => import('./lazy/launches/launches.module').then(m => m.LaunchesModule),
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full',
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
