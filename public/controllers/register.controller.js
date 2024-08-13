var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class RegisterController {
    postRegister(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json'
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = 'https://api-posts.codificando.xyz/users/register';
            const result = yield fetch(url, reqOptions);
            yield result.json().then(data => {
                sessionStorage.setItem('id', data.id);
            });
            console.log(result.status);
            if (result.status === 201) {
                alert('Registro exitoso');
            }
            else if (result.status === 500) {
                alert('No autorizado');
                throw new Error("Conexion fallida");
            }
            else {
                alert('Usuario o contraseña incorrecto');
                throw new Error("Conexion fallida");
            }
        });
    }
}
