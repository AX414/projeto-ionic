import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChihiroPageRoutingModule } from './chihiro-routing.module';

import { ChihiroPage } from './chihiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChihiroPageRoutingModule
  ],
  declarations: [ChihiroPage]
})
export class ChihiroPageModule {}
