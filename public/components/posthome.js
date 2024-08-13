var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EditPostController } from "../controllers/Edit_post_controller";
import { DeletePost } from "../controllers/delete_post_controller";
import { GetPostsController } from "../controllers/get_allposts_controller";
import { EditPost } from "./edit_post";
import './post_home.css';
export function PostHome() {
    const html = `
    <div class="cities-home">
        <h1 class="cities-home-title">POSTS</h1>
        <div class="cities-home-list">
            <ul id="cities-list">

            </ul>
        </div>
    </div>    
    `;
    const logic = () => {
        const getPosts = new GetPostsController();
        getPosts.getPosts().then((data) => {
            const postlist = document.getElementById('cities-list');
            data.forEach((post) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="city-container">
                        <h3 class="city-name">${post.title}</h3>
                        <p class="title-sec">Fecha de creación:</p>
                        <p class="city-country">${post.creationDate}</p>
                        <p class="title-sec">Fecha de publicación:</p>
                        <p class="city-country">${post.estimatedPublicationDate}</p>
                        <p class="title-sec">Platafroma:</p>
                        <p class="city-description">${post.platform}</p>
                        <p class="title-sec">Porcentaje de aprovación::</p>
                        <p class="city-temperature" id="porcen_aprov">${post.approvalPercentage} %</p>
                        <button class="button-delete-city" id="delete" idCard="${post.id}">Eliminar</button>
                        <button class="button-edit-city" idCard="${post.id}">Editar</button>
                    </div>
                `;
                if (post.approvalPercentage <= 60) {
                    li.style.backgroundColor = '#eb0b0b6d';
                }
                else {
                    li.style.backgroundColor = '#0beb307e';
                }
                postlist.appendChild(li);
            });
            const deleteButtons = document.querySelectorAll(`.button-delete-city`);
            deleteButtons.forEach(deletebutton => {
                deletebutton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    const id = deletebutton.getAttribute('idCard');
                    if (confirm('Estas seguro de eliminar este post?')) {
                        const deletecontroller = new DeletePost();
                        try {
                            yield deletecontroller.deleteBook(id);
                            location.reload();
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    ;
                }));
            });
            const editButtons = document.querySelectorAll('.button-edit-city');
            editButtons.forEach(editbutton => {
                editbutton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    EditPost();
                    const id = editbutton.getAttribute('idCard');
                    const editcontroller = new EditPostController(id);
                    editcontroller.Editpost();
                }));
            });
        });
    };
    return { html, logic };
}
