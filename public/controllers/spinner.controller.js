export class SpinnerController {
    createSpinner() {
        const $root = document.getElementById('root');
        const spinner = document.createElement('dialog');
        spinner.id = 'loading-spinner';
        spinner.style.display = 'none';
        const loader = document.createElement('div');
        loader.className = 'spinner';
        spinner.appendChild(loader);
        $root.appendChild(spinner);
    }
    startSpinner() {
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = 'flex';
        spinner.showModal();
    }
    stopSpinner() {
        const spinner = document.getElementById('loading-spinner');
        spinner.close();
        spinner.style.display = 'none';
    }
}
