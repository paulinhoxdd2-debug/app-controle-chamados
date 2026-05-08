import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizacaoStatusPage } from './atualizacao-status.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizacaoStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizacaoStatusPageRoutingModule {}
