import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import {IUsuarios, IIniciarSesion } from '../types';
import{UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private UsuarioServicio:UsuariosService) { }


  formInicioSesion: FormGroup = this.fb.group({
    nombreUsuario: ['', [Validators.required]],
    contrasena: ['', [Validators.required]],
    
  })
  
  ngOnInit(): void {
  }

//guardar datos form
iniciarSesion(event:Event){
  event.preventDefault()
  const usuario: IIniciarSesion = {
    nombreUsuario: this.formInicioSesion.value.nombreUsuario,
    contrasena: this.formInicioSesion.value.contrasena,
  }

  this.UsuarioServicio.iniciarSesion(usuario).subscribe(()=>{
    console.log('datos inicio sesion enviados al back')
  })
}

}

