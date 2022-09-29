import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuarios } from '../types';

import{UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: Usuarios[]=[]
  private usuariosSubscriber!: Subscription


  constructor(private UsuarioServicio:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosSubscriber = this.UsuarioServicio.consultarUsuario()
    .subscribe((data) => {
      this.usuarios = data

      console.log(data)
    });
  }

}

