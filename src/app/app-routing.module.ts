import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'launches',
  pathMatch: 'full'
}, {
  path: 'launches',
  loadChildren: () => import('./launches/launches.module').then(m => m.LaunchesModule),
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
