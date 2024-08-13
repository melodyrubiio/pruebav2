var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserLogin } from "../controllers/login.controller";
const url = 'https://api-posts.codificando.xyz/auth/login';
const loginForm = document.querySelector("#loginForm");
const emailUser = document.querySelector("#emailUser");
const passwordUser = document.querySelector("#passwordUser");
const loading = document.querySelector("#loading");
loginForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    loading.style.display = "flex";
    const user = {
        email: emailUser.value,
        password: passwordUser.value
    };
    try {
        const pageController = new UserLogin(url);
        const token = yield pageController.login(user);
        console.log(token);
        sessionStorage.setItem('token', token.token);
        const getToken = sessionStorage.getItem('token');
        if (getToken) {
            window.location.href = '../views/Home.html';
            alert('se inició sesión');
        }
    }
    catch (error) {
        alert(error);
        window.location.href = 'index.html';
    }
}));
