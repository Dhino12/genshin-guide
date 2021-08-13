import "./nav-item";

class InnerNav extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.setAttribute("class", "container d-flex flex-row");
        this.render()
    }

    render(){
        const titlePage = document.querySelector(".title-page");
        this.innerHTML = `
        <a class="navbar-brand navbar-toggler" href="#"><h2 class="title-nav">${titlePage.innerText}</h2></a>
        <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" 
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        `

        const page = ['artifacts', 'character'];

        const createItemNav = document.createElement("nav-item");
        createItemNav.namePage = page;
        this.appendChild(createItemNav);
    }
}

customElements.define("inner-nav", InnerNav);