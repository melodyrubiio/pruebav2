import { BodyRequestRegister } from "../models/register.model";
export class RegisterController {

    async postRegister(data: BodyRequestRegister): Promise<void> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }


        const url = 'https://api-posts.codificando.xyz/users/register';
        const result = await fetch(url, reqOptions);
        await result.json().then(data => {
            sessionStorage.setItem('id', data.id);
        });
        
        console.log(result.status);

        if (result.status === 201) {
            alert('Registro exitoso');
        } else if (result.status === 500) {
            alert('No autorizado');
            throw new Error("Conexion fallida");
        } else {
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }
    }
}