import { NgModule } from '@angular/core';

import { RepositoriesModule } from '../repositories/repositories.module';
import { SharedModule } from '../shared/shared.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import { Facades } from './facades';
import { Pages } from './pages';
import { Components } from './components';

@NgModule({
  imports: [
    LaunchesRoutingModule,
    RepositoriesModule,
    SharedModule,
  ],
  declarations: [
    Pages,
    Components,
  ],
  providers: [
    Facades,
  ],
})
export class LaunchesModule {}
