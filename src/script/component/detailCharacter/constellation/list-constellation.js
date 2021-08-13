import "./item-constellation";

class ListConstellation extends HTMLElement {

    constructor() {
        super();
    }

    set listConstellations(constellations) {
        console.log(constellations);
        this._listConstellation = constellations;
        this.render();
    }

    connectedCallback() {
        this._classList = this.getAttribute("class");
    }

    render() {  
        this.innerHTML = "";
        this._listConstellation.forEach(constellation => {
            const createItem = document.createElement("item-constellation");
            createItem.setAttribute("class", "card me-3 col-1 rounded-3 bg-grey-transparant");
            createItem.setAttribute("style", "width: 18rem;");
            createItem.itemConstellation = constellation;
            this.appendChild(createItem);
        });

    }
}

customElements.define('list-constellation', ListConstellation);