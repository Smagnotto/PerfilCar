import { Component, OnInit } from '@angular/core';
import { Perfil } from '../model/perfil.model';
import { VeiculoService } from '../service/veiculo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html',
  styleUrls: ['./lista-veiculo.component.css']
})
export class ListaVeiculoComponent implements OnInit {

  constructor(private service: VeiculoService) { }

  //listaPerfil: Observable<Perfil[]>
  listaPerfil: Perfil[] = [{
    id: 1,
    anoFabricacao: "1994",
    anoModelo: "1995",
    marca: "Fiat",
    modelo: "Palio",
    apelido: "Didi",
    emailProprietario: "",
    informacoesAdicionais: "",
    nomeProprietario: "",
    quilometragemAtual: "",
    timestamp: ""
  },
  {
    id: 2,
    anoFabricacao: "1994",
    anoModelo: "1995",
    marca: "Fiat",
    modelo: "Palio",
    apelido: "Bruno",
    emailProprietario: "",
    informacoesAdicionais: "",
    nomeProprietario: "",
    quilometragemAtual: "",
    timestamp: ""
  }]

  ngOnInit() {
    this.ListarPerfil();
  }

  private ListarPerfil() {
    //this.listaPerfil = this.service.listaPerfils();
  }

  Delete(id: number) {
    if (confirm("Deseja excluir o perfil selecionado?")) {
      //let index: number = this.listaPerfil.findIndex(x => x.id == id);

      //this.listaPerfil.splice(index, 1);
    }
  }

}
