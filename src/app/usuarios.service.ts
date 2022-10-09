import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IJwtResponse, IUsuarios, IIniciarSesion, IEnviarMensaje, IMostrarMensajesEnviados } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  [x: string]: any;

  //sesion
  AUTH_SERVER: string = environment.servidor;
  authSubject = new BehaviorSubject('false');
  private token: string = "";

  constructor(private servicio: HttpClient) {}

  consultarUsuario(): Observable<IUsuarios[]> {
    return this.servicio.get<IUsuarios[]>(environment.servidor + '/api/users');
  }

  consultarMensajesEnviados(): Observable<IMostrarMensajesEnviados[]> {
    return this.servicio.get<IMostrarMensajesEnviados[]>(environment.servidor + '/api/messages/sent');
  }


  guardarUsuario(usuario: IUsuarios): Observable<void> {
    return this.servicio.post<void>(
      environment.servidor + '/api/users',
      usuario
    );
  }


  enviarMensaje(mensaje: IEnviarMensaje): Observable<void> {
    return this.servicio.post<void>(
      environment.servidor + '/api/messages',
      mensaje
    );
  }

  iniciarSesion(usuario: IIniciarSesion): Observable<void> {
    return this.servicio.post<void>(environment.servidor + '/login', usuario);
  }

  // guardar usuario con tokenEN CAMINO
  // guardarUsuario(usuario: IUsuarios): Observable<IJwtResponse> {
  //   return this.servicio
  //     .post<IJwtResponse>(environment.servidor + '/api/users', usuario)
  //     .pipe(
  //       tap((res: IJwtResponse) => {
  //         if (res) {
  //           this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
  //         }
  //       })
  //     );
  // }

  // iniciarSesion(usuario: IIniciarSesion): Observable<IJwtResponse> {
  //   return this.servicio
  //     .post<IJwtResponse>(environment.servidor + '/login', usuario)
  //     .pipe(
  //       tap((res: IJwtResponse) => {
  //         if (res) {
  //           this['saveToken'](res.dataUser.accessToken, res.dataUser.expiresIn)
  //         }
  //       })
  //     );
  // }
  
  // cerrarSesion(){
  //   this.token = ''
  //   localStorage.removeItem('ACCESS_TOKEN')
  //   localStorage.removeItem('EXPIRES_IN')
  // }

  // private saveToken (token:string, expiresIn: string):void {
  //   localStorage.setItem('ACCESS_TOKEN',token)
  //   localStorage.setItem('EXPIRES_IN', expiresIn)
  //   this.token = token
  // }

  // private getToken():string{
  //   if (!this.token){
  //     this.token = localStorage.getItem('ACCESS_TOKEN')
  //   }
  //   return this.token
  // }
}
