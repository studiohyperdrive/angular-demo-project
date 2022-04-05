import { NgModule } from '@angular/core';

import { Services } from './services';
import { StoreModule } from '@ngrx/store';
import { launchReducer } from './store/launch/launch.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('launch', launchReducer),
    EffectsModule.forFeature([
      LaunchEffects,
    ]),
  ],
  providers: [
    Services,
  ],
})
export class RepositoriesModule {}
