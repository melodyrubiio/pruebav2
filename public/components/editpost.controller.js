var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class EditPostController {
    constructor(id) {
        this.id = id;
    }
    EditPostApi(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = sessionStorage.getItem('email');
            const headers = {
                'Content-Type': 'application/json',
                'x-user-email': `${email}`
            };
            const reqOptions = {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = `https://api-posts.codificando.xyz/posts/${this.id}`;
            try {
                const response = yield fetch(url, reqOptions);
                if (!response.ok) {
                    const errorText = yield response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }
                const result = yield response.json();
                console.log('Post creado', result);
            }
            catch (error) {
                console.error('Error al crear el post', error);
                alert('Error al crear el post');
            }
        });
    }
    Editpost() {
        const dialog = document.getElementById('edit-city-dialog');
        const title = document.getElementById('input-title');
        const body = document.getElementById('input-body');
        const author = document.getElementById('input-author');
        const publicDate = document.getElementById('input-publicDate');
        const status = document.getElementById('input-estado');
        const percentage = document.getElementById('input-percentage');
        const corrections = document.getElementById('input-correction');
        const plataform = document.getElementById('input-platform');
        const porcentaje = parseFloat(percentage.value);
        /*Quemados*/
        const date = "2024-08-8";
        const posturl = "http://example.com/post";
        const multimediaUrl = "http://example.com/media";
        if (!title.value || !body.value || !author.value || !publicDate.value || !status.value || !percentage || !corrections.value || !plataform.value) {
            alert('Por favor, rellene todos los campos');
            return;
        }
        const post = {
            title: title.value,
            body: body.value,
            creationDate: date,
            creator: author.value,
            estimatedPublicationDate: publicDate.value,
            status: status.value,
            approvalPercentage: porcentaje,
            corrections: corrections.value,
            platform: plataform.value,
            postUrl: posturl,
            multimediaUrl: multimediaUrl
        };
        console.log(post);
        try {
            this.EditPostApi(post);
            alert('Post creado');
            dialog.close();
            location.reload();
        }
        catch (error) {
            alert('Error al crear la ciudad: ' + error);
        }
    }
}
