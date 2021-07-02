import { RouterModule, Routes } from '@angular/router';

import { LaunchOverviewPage } from './pages/launch-overview/launch-overview.page';
import { NgModule } from '@angular/core';

const LaunchesRoutes: Routes = [{
  path: '',
  component: LaunchOverviewPage,
}]

@NgModule({
  imports: [
    RouterModule.forChild(LaunchesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LaunchesRoutingModule {}
