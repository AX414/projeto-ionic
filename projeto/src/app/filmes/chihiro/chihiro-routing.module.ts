import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChihiroPage } from './chihiro.page';

const routes: Routes = [
  {
    path: '',
    component: ChihiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChihiroPageRoutingModule {}
