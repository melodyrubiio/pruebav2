// Este archivo maneja la funcionalidad de añadir o actualizar ciudades en un archivo JSON
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PostController } from "./post.controller"; // Importamos el controlador CitiesController para manejar las operaciones CRUD de las ciudades
// Obtenemos referencias a los elementos del formulario
const form = document.querySelector("#addPost-form");
const title = document.querySelector("#new-post");
const description = document.querySelector("#new-description");
const image = document.querySelector("#new-img");
const platform = document.querySelector("#new-app");
const postIdInput = document.querySelector("#post-id");
// Definimos las variables necesarias
const citiesController = new PostController('https://api-posts.codificando.xyz/');
const endPoint = 'posts/'; // Endpoint donde se envían las peticiones para agregar o actualizar 
// Añadimos un listener para el evento de envío del formulario
form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    // Extraemos los valores de los campos del formulario
    const titleName = title.value;
    const descriptionName = description.value;
    const imageName = image.value;
    const platformName = platform.value;
    const postId = postIdInput.value; // Si se especifica un ID, se usará para actualizar la ciudad existente
    try {
        // Creamos un objeto IPost con los datos del formulario
        const cityData = {
            title: titleName,
            body: descriptionName,
            multimediaUrl: imageName,
            platform: platformName,
        };
        if (postId) {
            // Si se ha proporcionado un ID, actualizamos post existente
            yield citiesController.updatePost(postId, endPoint, cityData);
            alert("Publicación actualizada"); // Alerta de confirmación
        }
        else {
            // Si no hay ID, agregamos una nueva ciudad
            yield citiesController.postPost(endPoint, cityData);
            alert("Publicación agregado"); // Alerta de confirmación
        }
        // Reseteamos el formulario
        form.reset();
        // Redirigimos a la página de inicio para mostrar los cambios
        window.location.href = "home.html";
    }
    catch (error) {
        console.error("Error al agregar o actualizar el post:", error); // Manejo de errores
    }
}));
