import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizacaoStatusPageRoutingModule } from './atualizacao-status-routing.module';

import { AtualizacaoStatusPage } from './atualizacao-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizacaoStatusPageRoutingModule
  ],
  declarations: [AtualizacaoStatusPage]
})
export class AtualizacaoStatusPageModule {}
