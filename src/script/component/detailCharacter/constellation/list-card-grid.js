/* eslint-disable no-underscore-dangle */
import './card-item';

class ListConstellation extends HTMLElement {
    constructor() {
        super();
    }

    set listConstellations(constellations) {
        this._listConstellation = constellations;
        this.render();
    }

    connectedCallback() {
        this._classList = this.getAttribute('class');
    }

    render() {
        this.innerHTML = '';
        if (this._listConstellation.name !== undefined) {
            const createItem = document.createElement('card-item');
                createItem.setAttribute('class', 'card me-3 col-1 rounded-3 bg-transparent mb-3 border-0');
                createItem.setAttribute('style', 'width: 18rem;');
                createItem.itemConstellation = this._listConstellation;
                this.appendChild(createItem);
        } else {
            this._listConstellation.forEach((constellation) => {
                const createItem = document.createElement('card-item');
                createItem.setAttribute('class', 'card me-3 col-1 rounded-3 bg-transparent mb-3 border-0');
                createItem.setAttribute('style', 'width: 18rem;');
                createItem.itemConstellation = constellation;
                this.appendChild(createItem);
            });
        }
    }
}

customElements.define('list-card-grid', ListConstellation);
