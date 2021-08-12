import "./item-skill";

class CarouselInner extends HTMLElement{

    constructor(){
        super();
    }

    set carouselInner(skillChara){
        this._skillItem = skillChara;
    }

    connectedCallback(){
        this._classList = this.getAttribute("class");
        this._id = this.getAttribute("id");
        
        this.render();
    }

    render(){    
        this._skillItem.forEach((skill, index) => {
            const elementItemSkill = document.createElement("item-skill");
            elementItemSkill.itemSkill = skill;
            if(index === 0){
                elementItemSkill.setAttribute("class", "carousel-item active");
            }else{
                elementItemSkill.setAttribute("class", "carousel-item");
            }
            this.appendChild(elementItemSkill);
        });

        this.innerHTML += `
        <button class="carousel-prev bg-dark-blue" type="button" data-bs-target="#carousel-skill-telents" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-next bg-dark-blue" type="button" data-bs-target="#carousel-skill-telents" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        `
    }
}

customElements.define('inner-carousel', CarouselInner);