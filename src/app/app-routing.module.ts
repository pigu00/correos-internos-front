import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviarMensajesComponent } from './enviar-mensajes/enviar-mensajes.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component:UsuariosComponent},
  {path:'api/users', component:RegistroUsuariosComponent},
  {path:'login', component:LoginComponent},
  {path: 'api/messages', component:EnviarMensajesComponent},
  {path:'**',redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
