var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserRegister, UserVerifications } from "../controllers/register.controller";
const formRegister = document.querySelector("#register-form");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const url = 'https://api-posts.codificando.xyz/users/register';
formRegister.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    yield verifications();
}));
const verifications = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        email: userEmail.value,
        password: userPassword.value,
    };
    const userVerifications = new UserVerifications;
    const validInputs = userVerifications.inputsVerification(newUser);
    if (!validInputs) {
        alert('por favor, completa todos los campos');
        return;
    }
    yield createUser();
});
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        email: userEmail.value,
        password: userPassword.value
    };
    const createUser = new UserRegister;
    yield createUser.registerUser(url, newUser);
});
