import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { CommonModule } from '@angular/common';
import { DetalhesVeiculosComponent } from './detalhes-veiculos/detalhes-veiculos.component';

const routes: Routes = [
  { path: '', component: ListaVeiculoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, ListaVeiculoComponent, DetalhesVeiculosComponent],
  declarations: [
    ListaVeiculoComponent,
    DetalhesVeiculosComponent
  ]
})
export class VeiculoRoutingModule { }
