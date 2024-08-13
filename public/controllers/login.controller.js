var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Creamos la clase PageController, que tendrá la funcionalidad del log in
export class UserLogin {
    // Creamos el constructor y como parámetro la URL base para las peticiones
    constructor(url) {
        this.url = url;
    }
    //Método asíncrónico para el inicio de sesión
    //Recibe los datos de inicio de sesión (data) y el endpoint
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(data) //Acá convertimos el objeto data a JSON
            });
            //Manejo de errores y de versiones de usuario, la verdad nisiquiera se que estoy escribiendo.
            //Si la respuesta es diferente de 201, arrojamos el error
            if (response.status != 201) {
                throw new Error('no se pudo iniciar sesión');
            }
            // Convertimos la respuesta en formato JSON a un objeto IResponseLogin
            const token = yield response.json();
            return token;
        });
    }
}
