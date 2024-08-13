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
    `

    const logic = () => {
        const getPosts = new GetPostsController();
        getPosts.getPosts().then((data: any) => {
            const postlist = document.getElementById('cities-list') as HTMLUListElement;
            data.forEach((post: any) => {
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
                } else {
                    li.style.backgroundColor = '#0beb307e';
                }
                postlist.appendChild(li);
            });
            const deleteButtons = document.querySelectorAll(`.button-delete-city`);
            deleteButtons.forEach(deletebutton => {
                deletebutton.addEventListener('click', async () => {
                    const id = deletebutton.getAttribute('idCard') as string;


                    if (confirm('Estas seguro de eliminar este post?')) {
                        const deletecontroller = new DeletePost();

                        try {
                            await deletecontroller.deleteBook(id);
                            location.reload();
                        } catch (error) {
                            console.log(error);
                        }
                    };
                });
            });


            const editButtons = document.querySelectorAll('.button-edit-city');
            editButtons.forEach(editbutton => {
                editbutton.addEventListener('click', async () => {
                    EditPost();
                    const id = editbutton.getAttribute('idCard') as string;
                    const editcontroller = new EditPostController(id);
                    editcontroller.Editpost()
                })
            });
        });
    };
    return { html, logic };
}