/* eslint-disable no-underscore-dangle */
import './carousel-inner';

class ListSkillTalent extends HTMLElement {
    constructor() {
        super();
    }

    set skillTalents(skillChara) {
        this._skillTalents = skillChara;
        this.render();
    }

    connectedCallback() {
        this.setAttribute('class', 'carousel slide d-block');
        this.setAttribute('id', 'carousel-skill-telents');
    }

    render() {
        this.innerHTML = '';
        const createCarouselInner = document.createElement('inner-carousel');
        createCarouselInner.classList.add('carousel-inner', 'd-block');
        createCarouselInner.id = 'carousel-skill';
        createCarouselInner.carouselInner = this._skillTalents;
        this.appendChild(createCarouselInner);
    }
}

customElements.define('list-skill-telent', ListSkillTalent);
