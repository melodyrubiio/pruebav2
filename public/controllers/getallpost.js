var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class GetPostsController {
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = sessionStorage.getItem('id');
            const email = sessionStorage.getItem('email');
            const headers = {
                'Content-Type': 'application/json',
                'x-user-email': `${email}`
            };
            const reqOptions = {
                method: 'GET',
                headers: headers,
            };
            const url = `https://api-posts.codificando.xyz/posts/by-creator/${id}`;
            try {
                const response = yield fetch(url, reqOptions);
                if (!response.ok) {
                    const errorText = yield response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }
                const result = yield response.json();
                console.log('posts obtenidos', result);
                return result;
            }
            catch (error) {
                console.error('Error al obtener los posts', error);
                alert('Error al obtener los posts');
            }
        });
    }
}
