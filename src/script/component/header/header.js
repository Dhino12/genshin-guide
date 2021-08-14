/* eslint-disable no-underscore-dangle */
import './search-bar';

class HeaderItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('class', 'py-3 mb-3 ');
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class='d-grid gap-3 align-items-center px-lg-5' style='grid-template-columns: 0.3fr 2fr 0.1fr;'>
            <div class='ps-xl-5 text-center'>
                <a href='#' class=''>
                    <span class='fs-4'>
                        <img src="src/assets/image/logo/logo_genshin.png" width="124px" alt="logo">
                    </span>
                </a>
            </div>

            <search-bar style="display:contents;"></search-bar>
        </div>
        `;
    }
}

customElements.define('header-item', HeaderItem);
