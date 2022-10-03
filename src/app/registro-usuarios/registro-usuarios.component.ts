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
import { Usuarios, IPais, Iusuarios } from '../types';

import{UsuariosService} from '../usuarios.service'

interface Animal {
  name: string;
}

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent {
  public dataUsuario: Usuarios[]=[]
  private dataUsuarioSubscriber!: Subscription
  selectedValue!: string;

  constructor(private fb: FormBuilder, private UsuarioServicio:UsuariosService) {}

  // ngOnInit(): void {
  //   this.dataUsuarioSubscriber = this.dataUsuario.save()
  //   .subscribe((valor) => {
  //     this.dataUsuario = valor

  //     console.log(valor)
  //   });
  // }


  mismatch!: Boolean;
  
  formRegistro: FormGroup = this.fb.group({
    apellido: ['', Validators.required],
    nombre: [''],
    nombreUsuario: ['', [Validators.minLength(5)]],
    contrasena: ['', [Validators.required]],
    recontrasena: [null, [Validators.required]],
  })
  // pais = new FormControl<Animal | null>(null, Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  // paises: Animal[] = [
  //   {name: 'Argentina'},
  //   {name: 'Brasil'},
  //   {name: 'Uruguay'}
  // ]
  

  //validar usuario
  public validarNombreUsuario(nombreUsuario: string) {
    return (
      this.formRegistro.controls[nombreUsuario].errors &&
      this.formRegistro.controls[nombreUsuario].touched
    );
  }


//guardar datos form
  save(event:Event){
    event.preventDefault()
    const valor = this.formRegistro.value
    console.log(valor)
  }
  


  
  }
  
