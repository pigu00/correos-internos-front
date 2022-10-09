import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUsuarios, IMostrarMensajesEnviados } from '../types';

import{UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-mensajes-enviados',
  templateUrl: './mensajes-enviados.component.html',
  styleUrls: ['./mensajes-enviados.component.css']
})
export class MensajesEnviadosComponent implements OnInit {
  public mensajesEnviados: IMostrarMensajesEnviados[]=[]
  private usuariosSubscriber!: Subscription

  constructor(private UsuarioServicio:UsuariosService) { }

  ngOnInit(): void {
  
  this.listarMensajesEnviados()
    
}

listarMensajesEnviados(){
  this.usuariosSubscriber = this.UsuarioServicio.consultarMensajesEnviados()
    .subscribe((data) => {
      this.mensajesEnviados = data

      console.log(data)
    });
  
}
}
