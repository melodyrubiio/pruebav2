import { HeaderHome } from "../../components/headerhome";
import { PostHome } from "../../components/posthome";

export function HomeView() {
    const $root = document.getElementById('root') as HTMLElement;
    /*Header*/
    const header_logic = HeaderHome().logic;
    const header_html = HeaderHome().html;
    /*Posts */
    const post_html = PostHome().html;
    const post_logic = PostHome().logic;

    $root.innerHTML = '';

    /*html*/
    
    $root.innerHTML = header_html;
    $root.innerHTML += post_html



    /*Logica*/
    
    header_logic();
    post_logic();

};