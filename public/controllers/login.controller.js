var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class LoginController {
    postLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json'
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = 'https://api-posts.codificando.xyz/auth/login';
            const result = yield fetch(url, reqOptions);
            const response = yield result.json();
            const ResMessage = response.message;
            console.log(response.message);
            if (ResMessage === "Login successful") {
                alert('Login exitoso');
            }
            else if (ResMessage === "Invalid email or password") {
                alert('Usuario o contraseña incorrecto');
                throw new Error("Conexion fallida");
            }
            else {
                alert('Usuario o contraseña incorrecto');
                throw new Error("Conexion fallida");
            }
            const email = data.email;
            sessionStorage.setItem('email', email);
            // const token = userData.token;
            // const id = userData.id;
            // sessionStorage.setItem('id', id);
            // sessionStorage.setItem('token', token);
        });
    }
}
