import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { environment }from '../environments/environment';
import { Observable } from 'rxjs';
import { Usuarios } from './types';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private servicio:HttpClient) {  }

  consultarUsuario():Observable<any>{
    return this.servicio.get<Usuarios[]>(environment.servidor +'/api/users')
  }
}
