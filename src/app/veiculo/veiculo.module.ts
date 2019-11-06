import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculoRoutingModule } from './veiculo-routing.module';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { DetalhesVeiculosComponent } from './detalhes-veiculos/detalhes-veiculos.component';


@NgModule({
  declarations: [
    ListaVeiculoComponent,
    DetalhesVeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
