import { Component, OnInit } from '@angular/core';
import{UsuariosService} from '../usuarios.service'
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
  styleUrls: ['./enviar-mensajes.component.css']
})


export class EnviarMensajesComponent implements OnInit {
  selectedValue!: string;
  
  public usuarios: IUsuarios[]=[]
  private usuariosSubscriber!: Subscription
  public mensaje: IEnviarMensaje[]=[]

  constructor(private fbMensaje: FormBuilder, private UsuarioServicio:UsuariosService) { }
  

  enviarMensajeForm: FormGroup = this.fbMensaje.group({
    nombreUsuario: ['', Validators.required],
    asunto:['',Validators.required],
    mensaje:[''],
  })
  
  ngOnInit(): void {
    this.listarUsuarios()
    
  }
  
  
  listarUsuarios(){
    this.usuariosSubscriber = this.UsuarioServicio.consultarUsuario()
    .subscribe((data) => {
      this.usuarios = data

      console.log(this.usuarios)
    });
  }
  selectedUser = "selecciona un usuario"



  enviarMensaje(event:Event){
    event.preventDefault()
    const mensaje: IEnviarMensaje = {
      nombreUsuario: this.enviarMensajeForm.value.nombreUsuario,
      asunto: this.enviarMensajeForm.value.asunto,
      mensaje: this.enviarMensajeForm.value.mensaje,
      
    }

    this.UsuarioServicio.enviarMensaje(mensaje).subscribe(()=>{
      console.log('mensaje enviaro')
    })
  }
}
