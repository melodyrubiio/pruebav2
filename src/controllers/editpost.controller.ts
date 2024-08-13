import { postModal } from "../models/post";

export class EditPostController{
    constructor(public id:string){}
    async EditPostApi(data: postModal): Promise<void> {
        const email = sessionStorage.getItem('email');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'x-user-email': `${email}`
        };

        const reqOptions: RequestInit = {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        };

        const url = `https://api-posts.codificando.xyz/posts/${this.id}`;

        try {
            const response = await fetch(url, reqOptions);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const result = await response.json();

            console.log('Post creado', result);
        } catch (error) {
            console.error('Error al crear el post', error);
            alert('Error al crear el post');
        }
    }

    public Editpost() {
        const dialog = document.getElementById('edit-city-dialog') as HTMLDialogElement;

        const title = document.getElementById('input-title') as HTMLInputElement;
        const body = document.getElementById('input-body') as HTMLInputElement;
        const author = document.getElementById('input-author') as HTMLInputElement;
        const publicDate = document.getElementById('input-publicDate') as HTMLInputElement;
        const status = document.getElementById('input-estado') as HTMLInputElement;
        const percentage = document.getElementById('input-percentage') as HTMLInputElement;
        const corrections = document.getElementById('input-correction') as HTMLInputElement;
        const plataform = document.getElementById('input-platform') as HTMLInputElement;
        const porcentaje = parseFloat(percentage.value);

        /*Quemados*/
        const date = "2024-08-8";

        const posturl = "http://example.com/post";
        const multimediaUrl = "http://example.com/media";

        if (!title.value || !body.value || !author.value || !publicDate.value || !status.value || !percentage || !corrections.value || !plataform.value) {
            alert('Por favor, rellene todos los campos');
            return;
        }

        const post: postModal = {
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
        } catch (error) {
            alert('Error al crear la ciudad: ' + error);
        }
    }
}