import { Routes } from "../hlp/routes";
export function router() {
    const path = window.location.pathname;
    const publicRoute = Routes.public.find(route => route.path === path);
    const privateRoute = Routes.private.find(route => route.path === path);
    if (!publicRoute && !privateRoute && path !== '/') {
        alert('Pagina no encontrado');
        navigateTo('/Login');
        return;
    }
    const email = sessionStorage.getItem('email');
    if (path === '/' && !email) {
        navigateTo('/Login');
        return;
    }
    if (path === '/' && email) {
        navigateTo('/home');
        return;
    }
    if (publicRoute) {
        if ((path === '/Login' || path === '/Register') && email) {
            navigateTo('/home');
            return;
        }
        else {
            publicRoute.component();
            return;
        }
    }
    if (privateRoute) {
        if (email) {
            privateRoute.component();
            return;
        }
        else {
            navigateTo('/Login');
            return;
        }
    }
}
export function navigateTo(path) {
    window.history.pushState({}, "", window.location.origin + path);
    router();
}
