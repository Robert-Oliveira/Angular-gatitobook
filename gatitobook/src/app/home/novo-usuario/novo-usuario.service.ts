import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(
      'http://localhost:3000/user/signup',
      novoUsuario
    );
  }

  verificaUsuarioExistente(nomeUsuario: String): Observable<any> {
    return this.httpClient.get(
      `http://localhost:3000/user/exists/${nomeUsuario}`
    );
  }
}
