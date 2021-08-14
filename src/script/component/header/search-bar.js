class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('class', 'align-items-center');
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type="search" id="search" class="form-control py-2" placeholder="Search..." aria-label="Search">
        `;
    }
}

customElements.define('search-bar', SearchBar);
