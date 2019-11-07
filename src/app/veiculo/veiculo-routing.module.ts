import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { CommonModule } from '@angular/common';
import { DetalhesVeiculosComponent } from './detalhes-veiculos/detalhes-veiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListaVeiculoComponent },
  { path: 'detalhes/:id', component: DetalhesVeiculosComponent, data: { isEditing: false } } ,
  { path: 'editar/:id', component: DetalhesVeiculosComponent, data: { isEditing: true } } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule, ListaVeiculoComponent, DetalhesVeiculosComponent],
  declarations: [
    ListaVeiculoComponent,
    DetalhesVeiculosComponent
  ]
})
export class VeiculoRoutingModule { }
