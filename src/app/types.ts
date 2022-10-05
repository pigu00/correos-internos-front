export interface Usuarios{
    nombre: string;
    password: string;
    ciudad: string,
    pais:string
}


export interface IPais {
    value: string;
  viewValue: string;
  }


export interface IUsuarios{
    apellido: string;
    nombre:string;
    nombreUsuario:string;
    contrasena:string;
    pais:string;
    ciudad:string
}


export interface IIniciarSesion{
    nombreUsuario:string;
    contrasena:string;
   
}

export interface IJwtResponse{
    dataUser:{
        nombreUsuario:string,
        accessToken:string,
        expiresIn: string 
    }
}