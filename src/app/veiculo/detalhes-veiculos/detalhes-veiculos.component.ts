import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../service/veiculo.service';
import { Perfil } from '../model/perfil.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-detalhes-veiculos',
  templateUrl: './detalhes-veiculos.component.html',
  styleUrls: ['./detalhes-veiculos.component.css']
})
export class DetalhesVeiculosComponent implements OnInit {

  id: number = 0;
  isEditing: boolean = false;
  detail: Observable<Perfil>;
  form: FormGroup

  constructor(private router: ActivatedRoute, private service: VeiculoService) { 
    this.router.params.subscribe(param => {
      this.id = param["id"];
    })

    this.router.data.subscribe(option => {
      this.isEditing = option.isEditing;
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      nomeProprietario: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      emailProprietario: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      apelido: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      anoFabricacao: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      anoModelo: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      marca: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      modelo: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      informacoesAdicionais: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required),
      timestamp: new FormControl({ value: '', disabled: !this.isEditing} , Validators.required)
    })

    this.Details(this.id);
  }

  get nomeProprietario() {
    return this.form.get('nomeProprietario')
  }

  get emailProprietario() {
    return this.form.get('emailProprietario')
  }

  get apelido() {
    return this.form.get('apelido')
  }

  get anoFabricacao() {
    return this.form.get('anoFabricacao')
  }

  get anoModelo() {
    return this.form.get('anoModelo')
  }

  get marca() {
    return this.form.get('marca')
  }

  get modelo() {
    return this.form.get('modelo')
  }

  get informacoesAdicionais() {
    return this.form.get('informacoesAdicionais')
  }

  get timestamp() {
    return this.form.get('timestamp')
  }



  private Details(id: number) {
    //Carrega o form 
    this.detail = this.service.detailsPerfil(id).pipe(
      tap(detail => this.form.patchValue(detail))
    );
  }

  SavePerfil() {
    if (this.form.valid) {
      alert("Saved")
    }
  }
}
