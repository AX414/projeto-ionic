import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotoroPage } from './totoro.page';

const routes: Routes = [
  {
    path: '',
    component: TotoroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotoroPageRoutingModule {}
