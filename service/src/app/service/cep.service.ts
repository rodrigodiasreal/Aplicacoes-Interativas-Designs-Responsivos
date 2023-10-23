import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  obterEndereco(cep: String) : Observable<Endereco> {
   return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);

  }
}
