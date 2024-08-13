import "./edit_post.css";

export function EditPost() {
    const dialog = document.createElement('dialog');
    dialog.id = 'edit-city-dialog';
    dialog.innerHTML = /*html*/`
            <h2 class="dialog-title">Crear Post</h2>
            <form class="dialog-form">
                <div class="dialog-form-field">
                    <label for="city-name">Titulo:</label>
                    <input type="text" id="input-title" name="city-name">
                </div>
                <div class="dialog-form-field">
                    <label for="city-country">Cuerpo:</label>
                    <textarea id="input-body" name="city-description"></textarea>
                </div>
                <div class="dialog-form-field">
                    <label for="city-name">Autor:</label>
                    <input type="text" id="input-author" name="city-name">
                </div>
                <div class="dialog-form-description">
                    <label for="city-description">fecha de publicación:</label>
                    <input type="text" id="input-publicDate">
                </div>
                <div class="dialog-form-field">
                    <label for="city-name">Estado:</label>
                    <input type="text" id="input-estado" name="city-name">
                </div> 
                <div class="dialog-form-field">
                    <label for="city-name">Porcentaje de aprovación:</label>
                    <input type="number" id="input-percentage" name="city-name">
                </div>
                <div class="dialog-form-field">
                    <label for="city-name">Correcciones:</label>
                    <input type="text" id="input-correction" name="city-name">
                </div>
                <div class="dialog-form-field">
                    <label for="city-name">Plataforma:</label>
                    <input type="text" id="input-platform" name="city-name">
                </div>
                <div class="dialog-form-buttons">
                    <button type="button" id="button-edit">Editar</button>
                    <button type="button" id="cancel-city">Cancelar</button>
                </div>
            </form>
        `;
    document.body.appendChild(dialog);
    dialog.showModal();

}