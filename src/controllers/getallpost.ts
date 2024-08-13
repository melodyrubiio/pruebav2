export class GetPostsController {
    async getPosts(): Promise<void> {
        const id = sessionStorage.getItem('id');
        const email = sessionStorage.getItem('email');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'x-user-email': `${email}`

        };

        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers,
        };
        const url = `https://api-posts.codificando.xyz/posts/by-creator/${id}`;
        try {
            const response = await fetch(url, reqOptions);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const result = await response.json();
            console.log('posts obtenidos', result);
            return result;
        } catch (error) {
            console.error('Error al obtener los posts', error);
            alert('Error al obtener los posts');
        }
    }
}