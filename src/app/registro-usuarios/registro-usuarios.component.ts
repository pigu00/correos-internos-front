import { Component, OnInit } from '@angular/core';
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
import { Usuarios, IPais, IUsuarios } from '../types';
import{UsuariosService} from '../usuarios.service'



@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent implements OnInit {
  

  constructor(private fb: FormBuilder, private UsuarioServicio:UsuariosService) {}
  
  
  formRegistro: FormGroup = this.fb.group({
    apellido: ['', Validators.required],
    nombre: [''],
    nombreUsuario: ['', [Validators.minLength(5)]],
    contrasena: ['', [Validators.required]],
    recontrasena: [null, [Validators.required]],
    pais:['',[Validators.required]],
    ciudad:['',[Validators.required]]
  })
  
ngOnInit(): void {
    
}

  //guardar datos form
  agregarUsuario(event:Event){
    event.preventDefault()
    const usuario: IUsuarios = {
      apellido: this.formRegistro.value.apellido,
      nombre: this.formRegistro.value.nombre,
      nombreUsuario: this.formRegistro.value.nombreUsuario,
      contrasena: this.formRegistro.value.contrasena,
      pais: this.formRegistro.value.pais,
      ciudad: this.formRegistro.value.ciudad
    }

    this.UsuarioServicio.guardarUsuario(usuario).subscribe(()=>{
      console.log('Usuario agragado')
    })
  }

  //validar usuario
  public validarNombreUsuario(nombreUsuario: string) {
    return (
      this.formRegistro.controls[nombreUsuario].errors &&
      this.formRegistro.controls[nombreUsuario].touched
    );
  }

  }
  
