import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MaterialModule} from './material/material.module';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MaterialModule,
    MatInputModule,
    
    ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
