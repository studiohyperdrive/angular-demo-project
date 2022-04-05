import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { Services } from './services';
import { launchReducer } from './store/launch/launch.reducer';
import { LaunchEffects } from './store/launch/launch.effects';
import { rocketReducer } from './store/rocket/rocket.reducer';
import { RocketEffects } from './store/rocket/rocket.effects';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('launch', launchReducer),
    StoreModule.forFeature('rocket', rocketReducer),
    EffectsModule.forFeature([
      LaunchEffects,
      RocketEffects,
    ]),
  ],
  providers: [
    Services,
  ],
})
export class RepositoriesModule {}
