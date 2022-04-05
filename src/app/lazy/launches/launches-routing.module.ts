import { RouterModule, Routes } from '@angular/router';

import { LaunchOverviewPage } from './pages/launch-overview/launch-overview.page';
import { NgModule } from '@angular/core';
import { RocketDetailPage } from './pages/rocket-detail/rocket-detail.page';

const LaunchesRoutes: Routes = [{
  path: '',
  component: LaunchOverviewPage,
}, {
  path: 'rocket/:id',
  component: RocketDetailPage,
}];

@NgModule({
  imports: [
    RouterModule.forChild(LaunchesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LaunchesRoutingModule {}
