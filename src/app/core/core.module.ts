import { NgModule } from '@angular/core';

import { Components } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Components,
  ],
  exports: [
    Components,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CoreModule {}
