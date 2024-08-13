var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class DeletePost {
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = sessionStorage.getItem('email');
            const headers = {
                'Content-Type': 'application/json',
                'x-user-email': `${email}`
            };
            const reqOptions = {
                method: 'DELETE',
                headers: headers,
            };
            const url = `https://api-posts.codificando.xyz/posts/${id}`;
            const result = yield fetch(url, reqOptions);
            if (result.status !== 200) {
                throw new Error("Conexion fallida");
            }
            else {
                alert("Post eliminado");
            }
        });
    }
}
