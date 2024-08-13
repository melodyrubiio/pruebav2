import { BodyRequestLogin } from "../models/login.model";

export class LoginController {

    async postLogin(data: BodyRequestLogin): Promise<void> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }


        const url = 'https://api-posts.codificando.xyz/auth/login';
        const result = await fetch(url, reqOptions);

        const response = await result.json();
        const ResMessage = response.message;
        console.log(response.message);

        if (ResMessage === "Login successful") {
            alert('Login exitoso');
        } else if (ResMessage === "Invalid email or password") {
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        } else {
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }

        const email = data.email;
        sessionStorage.setItem('email', email);
        // const token = userData.token;
        // const id = userData.id;
        // sessionStorage.setItem('id', id);
        // sessionStorage.setItem('token', token);

    }
}