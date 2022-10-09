import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Usuarios, IEnviarMensaje, IUsuarios } from '../types';
import { coerceStringArray } from '@angular/cdk/coercion';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enviar-mensajes',
  templateUrl: './enviar-mensajes.component.html',
  styleUrls: ['./enviar-mensajes.component.css'],
})
export class EnviarMensajesComponent implements OnInit {

  public usuarios: IUsuarios[] = [];
  private usuariosSubscriber!: Subscription;
  public mensaje: IEnviarMensaje[] = [];
  selectedValue!: string;

  constructor(
    private fb: FormBuilder,
    private UsuarioServicio: UsuariosService
  ) {}

  
  

  ngOnInit() {

    this.listarUsuarios();
    
  }

 
  enviarMensajeForm: FormGroup = this.fb.group({
    idusuario: [''],
    usuarioDestino: [''],
    asunto: [''],
    mensajeTexto: ['', [Validators.maxLength(144)]],
  });

  listarUsuarios() {
    this.usuariosSubscriber = this.UsuarioServicio.consultarUsuario().subscribe(
      (data) => {
        this.usuarios = data;

        console.log(this.usuarios);
      }
    );
  }

  selectedUser = 'selecciona un usuario';
  selectedUser2 = 'seleciona destinatario';
  
  enviarMensaje(event: Event) {
    event.preventDefault();

    const mensaje: IEnviarMensaje = {
      idusuario: this.enviarMensajeForm.value.idusuario,
      asunto: this.enviarMensajeForm.value.asunto,
      mensajeTexto: this.enviarMensajeForm.value.mensajeTexto,
      usuarioDestino: this.enviarMensajeForm.value.usuarioDestino,
    };
    console.log(mensaje);

    this.UsuarioServicio.enviarMensaje(mensaje).subscribe(() => {
      console.log('mensaje enviaro');
    });
  }

  public validarCaracteres(mensajeTexto: string) {
    return (
      this.enviarMensajeForm.controls[mensajeTexto].errors &&
      this.enviarMensajeForm.controls[mensajeTexto].touched
    );
  }
}
