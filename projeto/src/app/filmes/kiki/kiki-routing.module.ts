import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KikiPage } from './kiki.page';

const routes: Routes = [
  {
    path: '',
    component: KikiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KikiPageRoutingModule {}
