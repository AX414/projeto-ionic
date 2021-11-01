import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KikiPageRoutingModule } from './kiki-routing.module';

import { KikiPage } from './kiki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KikiPageRoutingModule
  ],
  declarations: [KikiPage]
})
export class KikiPageModule {}
