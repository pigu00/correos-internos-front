import { Component } from '@angular/core';
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


import { IPais } from '../types';

interface Animal {
  name: string;
}

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent {

  selectedValue!: string;



  constructor(private fb: FormBuilder) {}
  mismatch!: Boolean;

  formRegistro: FormGroup = this.fb.group({
    apellido: ['', Validators.required],
    nombre: [''],
    nombreUsuario: ['', [Validators.minLength(5)]],
    contrasena: ['', [Validators.required]],
    repetirContrasena: [null, [Validators.required]],
  })
  pais = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  paises: Animal[] = [
    {name: 'Argentina'},
    {name: 'Brasil'},
    {name: 'Uruguay'}
  ]
  

  //validar usuario
  public validarNombreUsuario(nombreUsuario: string) {
    return (
      this.formRegistro.controls[nombreUsuario].errors &&
      this.formRegistro.controls[nombreUsuario].touched
    );
  }

  
  }
  
