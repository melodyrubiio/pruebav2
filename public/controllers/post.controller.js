var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PostController {
    constructor(url) {
        this.url = url;
    }
    getPost() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.url}`);
            const data = yield response.json();
            console.log(response.status);
            return data;
        });
    }
    postPost(endPoint, dataPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.url}${endPoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataPost)
            });
            console.log(response);
            if (response.status !== 200) {
                throw new Error(`No se puede publicar`);
            }
            const data = yield response.json();
            return data;
        });
    }
    deletePost(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${url}/posts/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`Error al eliminar la ciudad: ${response.statusText}`);
            }
            console.log('Ciudad eliminada exitosamente');
        });
    }
    updatePost(id, endPoint, dataPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "accept": "*/*",
                "Content-Type": "application/json",
            };
            const reqOptions = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(dataPost)
            };
            const response = yield fetch(`${this.url}${endPoint}${id}`, reqOptions);
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error al actualizar la ciudad: ${response.statusText}`);
            }
            const updatedPost = yield response.json();
            return updatedPost;
        });
    }
}
