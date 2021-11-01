import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotoroPageRoutingModule } from './totoro-routing.module';

import { TotoroPage } from './totoro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotoroPageRoutingModule
  ],
  declarations: [TotoroPage]
})
export class TotoroPageModule {}
