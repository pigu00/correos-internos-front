import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { environment }from '../environments/environment';
import { Observable } from 'rxjs';
import { Usuarios,IUsuarios, IIniciarSesion } from './types';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  [x: string]: any;

  constructor(private servicio:HttpClient) {  }

  consultarUsuario():Observable<IUsuarios[]>{
    return this.servicio.get<IUsuarios[]>(environment.servidor +'/api/users')
  }

  guardarUsuario(usuario:IUsuarios ):Observable<void>{
    return this.servicio.post<void>(environment.servidor +'/api/users', usuario)
  }

  iniciarSesion(usuario:IIniciarSesion ):Observable<void>{
    return this.servicio.post<void>(environment.servidor +'/login', usuario)
  }

}
