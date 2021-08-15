/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
class NavItem extends HTMLElement {
    constructor() {
        super();
    }

    set namePage(namePage) {
        this._namePage = namePage;
    }

    connectedCallback() {
        this.id = 'navbar';
        this.setAttribute('class', 'navbars collapse navbar-collapse flex-column');
        this.render();
    }

    render() {
        let pages = '';
        for (const page of this._namePage) {
            if (page == 'character') {
                pages += `<a class="nav-link mb-2" href="index.html"><span>${page.toUpperCase()}</span></a>`;
            } else {
                pages += `<a class="nav-link mb-2" href="${page}.html"><span>${page.toUpperCase()}</span></a>`;
            }
        }

        this.innerHTML = `
        <nav class="nav navbar-nav flex-column">
            ${pages}
        </nav>  
        `;
    }
}

customElements.define('nav-item', NavItem);
