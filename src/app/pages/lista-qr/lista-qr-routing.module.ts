import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaQrPage } from './lista-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ListaQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaQrPageRoutingModule {}
