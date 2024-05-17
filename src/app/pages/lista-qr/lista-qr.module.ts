import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaQrPageRoutingModule } from './lista-qr-routing.module';

import { ListaQrPage } from './lista-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaQrPageRoutingModule
  ],
  declarations: [ListaQrPage]
})
export class ListaQrPageModule {}
