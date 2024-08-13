export class DeletePost {

    async deleteBook(id: string) {
        const email = sessionStorage.getItem('email');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'x-user-email': `${email}`
        }

        const reqOptions: RequestInit = {
            method: 'DELETE',
            headers: headers,
        }

        const url = `https://api-posts.codificando.xyz/posts/${id}`
        const result = await fetch(url, reqOptions);

        if (result.status !== 200) {
            throw new Error("Conexion fallida");
        } else {
            alert("Post eliminado");
        }
    }
}