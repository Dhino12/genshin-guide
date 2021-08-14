import "./inner-nav";

class NavContainer extends HTMLElement{

    constructor(){
        super();
        this.render();
    }
    
    connectedCallback(){
        this.setAttribute("class", "navbar navbar-expand-lg");
    }

    render(){
        const createInnerNav = document.createElement("inner-nav");
        this.appendChild(createInnerNav);

    }
}

customElements.define("nav-container", NavContainer);