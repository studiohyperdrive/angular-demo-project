import { NgModule } from '@angular/core';

import { Components } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Components,
  ],
  exports: [
    Components,
  ],
  imports: [
    RouterModule
  ]
})
export class CoreModule {}
