import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculoRoutingModule } from './veiculo-routing.module';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';


@NgModule({
  declarations: [
    ListaVeiculoComponent
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
