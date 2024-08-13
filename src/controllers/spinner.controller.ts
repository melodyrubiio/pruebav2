
export class SpinnerController{

    public createSpinner() {
        const $root = document.getElementById('root') as HTMLElement;
        const spinner = document.createElement('dialog') as HTMLDialogElement;
        spinner.id = 'loading-spinner';
        spinner.style.display = 'none';
        const loader = document.createElement('div') as HTMLDivElement;
        loader.className = 'spinner';
        spinner.appendChild(loader);
        $root.appendChild(spinner);
    }

    public startSpinner() {
        const spinner = document.getElementById('loading-spinner') as HTMLDialogElement;
        spinner.style.display = 'flex';
        spinner.showModal();
    }

    public stopSpinner() {
        const spinner = document.getElementById('loading-spinner') as HTMLDialogElement;   
        spinner.close();
        spinner.style.display = 'none';
    }
}