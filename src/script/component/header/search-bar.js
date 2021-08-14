/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#search').value;
    }

    connectedCallback() {
        this.setAttribute('class', 'align-items-center');
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type="search" id="search" class="form-control py-2" placeholder="Search..." aria-label="Search">
            <button type='submit' id="btn-search" class='btn btn-light p-2' value='search'><i class='fas fa-search'></i></button>
        `;
        this.querySelector('#btn-search').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);
