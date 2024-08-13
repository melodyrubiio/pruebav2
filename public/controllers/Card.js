var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PostController } from "./post.controller";
export const Card = (props) => {
    let { id, title, body, platform, multimediaUrl } = props;
    const cardContainer = document.createElement("article");
    cardContainer.className = "card-container";
    const img = document.createElement("img");
    img.className = "img-card";
    const infoContainer = document.createElement("div");
    infoContainer.className = "cardInfo-container";
    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    const cardPlatform = document.createElement("p");
    const cardDescription = document.createElement("p");
    const cardTemperature = document.createElement("p");
    img.src = multimediaUrl;
    cardTitle.innerText = title;
    cardPlatform.innerText = platform;
    cardDescription.innerText = body;
    const updateButton = document.createElement("button");
    updateButton.innerText = "Actualizar";
    updateButton.className = "update-button";
    updateButton.addEventListener("click", () => {
        // Actualiza los valores del formulario
        document.querySelector("#new-post").value = title;
        document.querySelector("#new-description").value = body;
        document.querySelector("#new-img").value = multimediaUrl;
        document.querySelector("#new-app").value = platform;
        // Almacena el ID de la ciudad para actualizar
        const postIdInput = document.querySelector("#post-id");
        if (postIdInput) {
            postIdInput.value = String(id); // Convertimos el id a string
        }
    });
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const url = 'https://api-posts.codificando.xyz';
        const confirmDelete = confirm('¿Deseas eliminar?');
        if (confirmDelete) {
            try {
                const citiesController = new PostController(url);
                yield citiesController.deletePost(`${url}`, `${id}`);
                console.log(`${citiesController.deletePost(`${url}`, `${id}`)}`);
                cardContainer.remove();
            }
            catch (error) {
                console.error("Error al eliminar la ciudad:", error);
            }
        }
    }));
    infoContainer.append(cardTitle, cardDescription, cardTemperature, updateButton, deleteButton);
    cardContainer.append(img, infoContainer);
    return cardContainer;
};
