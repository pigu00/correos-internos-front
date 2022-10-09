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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { EnviarMensajesComponent } from './enviar-mensajes/enviar-mensajes.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MensajesEnviadosComponent } from './mensajes-enviados/mensajes-enviados.component';
import { MensajesRecibidosComponent } from './mensajes-recibidos/mensajes-recibidos.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RegistroUsuariosComponent,
    NavBarComponent,
    LoginComponent,
    EnviarMensajesComponent,
    MensajesEnviadosComponent,
    MensajesRecibidosComponent
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
    MatMenuModule,
    MatListModule,
    TextFieldModule,
    MatAutocompleteModule
    ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
