import { CreatePostController } from "../controllers/addpost.controller";
import { navigateTo } from "../router";
import { CreatePost } from "./addpost";
import "../style/headerhome.css";
export function HeaderHome() {
    const html = `
        <header class="header">
            <h1 class="header-title">Zona Post</h1>
            <div class="header-buttons">
                <button id="create-post" class="btn_header">Crear POST</button>
                <button id="logout" class="btn_header">Salir</button>
            </div>
        </header>
    `;
    const logic = () => {
        const button_logout = document.getElementById('logout');
        button_logout.addEventListener('click', () => {
            sessionStorage.removeItem('email');
            navigateTo('/Login');
        });
        const button_createPost = document.getElementById('create-post');
        button_createPost.addEventListener('click', () => {
            CreatePost();
            const create_post_controller = new CreatePostController();
            create_post_controller.cancelButton();
            create_post_controller.createPost();
        });
    };
    return { html, logic };
}
