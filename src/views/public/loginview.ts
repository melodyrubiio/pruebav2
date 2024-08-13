import { LoginController } from "../../controllers/login.controller";
import { SpinnerController } from "../../controllers/spinner.controller";
import { navigateTo } from "../../router";

export function LoginView() {
    const $root = document.getElementById('root') as HTMLElement;

    // Limpiar el contenido del root
    $root.innerHTML = '';

    // Crear el contenedor del formulario
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    // Crear el formulario de inicio de sesión
    const form = document.createElement('form');
    form.id = 'loginForm';
    form.className = 'login-form';

    // Crear el titulo del formulario
    const title = document.createElement('h2');
    title.textContent = 'Iniciar Sesión';
    title.className = 'form-title';

    // Crear el campo de correo electrónico
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.className = 'form-label';
    emailLabel.textContent = 'Correo electrónico:';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.className = 'form-input';
    emailInput.required = true;
    
    // Crear el campo de contraseña
    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.className = 'form-label';
    passwordLabel.textContent = 'Contraseña:';
    
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    passwordInput.className = 'form-input';
    passwordInput.required = true;
    
    // Crear el botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'form-button button_login';
    submitButton.textContent = 'Iniciar sesión';

    //crear boton de registro
    const registerButton = document.createElement('button');
    registerButton.type = 'submit';
    registerButton.className = 'form-button button_register';
    registerButton.textContent = 'Registrarse';
    
    // Agregar todos los elementos al formulario
    form.appendChild(title);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br')); // Línea en blanco para separación
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br')); // Línea en blanco para separación
    form.appendChild(submitButton);
    form.appendChild(document.createElement('br')); // Línea en blanco para separación
    form.appendChild(registerButton);
    
    // Agregar el formulario al contenedor
    formContainer.appendChild(form);

    // Agregar el contenedor al contenedor root
    $root.appendChild(formContainer);

    // Agregar spinner
    const spinnerController = new SpinnerController();
    spinnerController.createSpinner();

    //Logica LOGIN
    submitButton.addEventListener('click', async (event) => {
        spinnerController.startSpinner();
        event.preventDefault();
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const loginController = new LoginController();
        try{
            await loginController.postLogin({ email: email.value, password: password.value });
            navigateTo('/home');
        }catch(error){
            console.log(error);
        }finally{
            spinnerController.stopSpinner();
        }
    });

    //Logica REGISTER
    registerButton.addEventListener('click', () => {
        navigateTo('/Register');
    });

    
}