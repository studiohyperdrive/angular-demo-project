import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Components } from './components';
import { Pages } from './pages';

@NgModule({
  declarations: [
    Components,
    Pages,
  ],
  exports: [
    Components,
    Pages,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
})
export class CoreModule {}
