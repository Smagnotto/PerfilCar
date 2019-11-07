import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Perfil } from '../model/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  listaPerfils() {
    return this.http.get<Perfil[]>(`${environment.apiService}/perfil/perfils`)
  }

  detailsPerfil(id: number) {
    return this.http.get<Perfil>(`${environment.apiService}/perfil/${id}`)
  }
}
