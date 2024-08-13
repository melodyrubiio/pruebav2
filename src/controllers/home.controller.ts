import { IPost } from "../models/post";
import { Card } from "./card.controller";
import { PostController } from "./post.controller";

const logoutButton = document.querySelector("#logout") as HTMLButtonElement;
const session = sessionStorage.getItem('token');

const url = 'https://api-posts.codificando.xyz/posts';

const cardSection = document.querySelector('#card-section') as HTMLElement;

(() => {
    if (!session) {
        alert('debes iniciar sesión');
        window.location.href = '../../index.html'
    }
})();

logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
});

async function showPost() {
    const postController = new PostController(url);
    const post = await postController.getPost();
    
    Array ((city: IPost) => {
        cardSection?.append(Card(city));
    }); 
}

showPost();