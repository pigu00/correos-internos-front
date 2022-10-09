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
import { Subscription } from 'rxjs';
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
  selectedValue!: string;

  public usuarios: IUsuarios[] = [];
  private usuariosSubscriber!: Subscription;
  public mensaje: IEnviarMensaje[] = [];

  constructor(
    private fb: FormBuilder,
    private UsuarioServicio: UsuariosService
  ) {}

  enviarMensajeForm: FormGroup = this.fb.group({
    idusuario: ['',[Validators.required]],
    asunto: ['',[Validators.required]],
    mensajeTexto: ['', [Validators.maxLength(144),Validators.required]],
  });

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuariosSubscriber = this.UsuarioServicio.consultarUsuario().subscribe(
      (data) => {
        this.usuarios = data;

        console.log(this.usuarios);
      }
    );
  }
  selectedUser = 'selecciona un usuario';

  enviarMensaje(event: Event) {
    event.preventDefault();

    const mensaje: IEnviarMensaje = {
      idusuario: this.enviarMensajeForm.value.idusuario,
      asunto: this.enviarMensajeForm.value.asunto,
      mensajeTexto: this.enviarMensajeForm.value.mensajeTexto,
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
