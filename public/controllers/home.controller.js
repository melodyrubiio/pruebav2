var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Card } from "./card.controller";
import { PostController } from "./post.controller";
const logoutButton = document.querySelector("#logout");
const session = sessionStorage.getItem('token');
const url = 'https://api-posts.codificando.xyz/posts';
const cardSection = document.querySelector('#card-section');
(() => {
    if (!session) {
        alert('debes iniciar sesión');
        window.location.href = '../../index.html';
    }
})();
logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
});
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const postController = new PostController(url);
        const post = yield postController.getPost();
        Array((city) => {
            cardSection === null || cardSection === void 0 ? void 0 : cardSection.append(Card(city));
        });
    });
}
showPost();
