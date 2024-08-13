//Creamos el archivo page.controller, que tiene como objetivo manejar el login
//Importamos la interfaces necesarias para el log in
import { Ilogin, IResponseLogin } from "../models/login.model";


//Creamos la clase PageController, que tendrá la funcionalidad del log in
export class UserLogin {
    url : string;

    // Creamos el constructor y como parámetro la URL base para las peticiones
    constructor(url : string) {
        this.url = url;
    }


    //Método asíncrónico para el inicio de sesión
    //Recibe los datos de inicio de sesión (data) y el endpoint
    async login(data : Ilogin) : Promise<IResponseLogin> { 
        const response = await fetch(`${this.url}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'Application/json'
            },
            body : JSON.stringify(data) //Acá convertimos el objeto data a JSON
        });

        //Manejo de errores 
        //Si la respuesta es diferente de 201, arrojamos el error
        if (response.status != 201) {
            throw new Error('no se pudo iniciar sesión');
        }

        // Convertimos la respuesta en formato JSON a un objeto IResponseLogin
        const token : IResponseLogin = await response.json();
        return token;
    }
}