import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';


const routes: Routes = [
  { path: '', component: ListaVeiculoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ListaVeiculoComponent],
  declarations: [
    ListaVeiculoComponent
  ]
})
export class VeiculoRoutingModule { }
