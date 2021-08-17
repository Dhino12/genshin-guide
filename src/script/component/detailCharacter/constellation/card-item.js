/* eslint-disable no-underscore-dangle */
import html from '../../template/constellation/card-item.html';
import componentTemplateFactory from '../../util/constellation/componentTemplateFactory';

const template = componentTemplateFactory(html, '', 'card-item');

class ItemConstellation extends HTMLElement {
    constructor() {
        super();
    }

    set itemConstellation(constellation) {
        this._itemConstellation = constellation;
    }

    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));

        this._classList = this.getAttribute('class');
        this._style = this.getAttribute('style');

        this.render();
    }

    render() {
        const checkLink = this._itemConstellation.max_rarity !== undefined;

        if (this._itemConstellation.unlock === undefined && !checkLink) {
            // for artefact page
            this.querySelector('h5.card-title').innerText = this._itemConstellation;
            this.querySelector('img#img-skill').src = `https://api.genshin.dev/artifacts/${this._itemConstellation}/flower-of-life.webp`;
            this.querySelector('ul.list-group-flush').remove();
        } else {
            if (checkLink) {
                // on the searched artifact page then, will create a new variable
                    /* to summarize code, and unify code with character pages and artifacts page */
                    console.log(this._itemConstellation);
                this._itemConstellation.unlock = this._itemConstellation['2-piece_bonus'];
                this._itemConstellation.description = this._itemConstellation['4-piece_bonus'];
                this._itemConstellation.level = this._itemConstellation.max_rarity;
                this.querySelector('img#img-skill').src = `${this._itemConstellation.link}/flower-of-life.webp`;
            } else {
                this.querySelector('img#img-skill').removeAttribute('src');
            }
            // for character page
            this.querySelector('h5.card-title').innerText = this._itemConstellation.name;
            this.querySelectorAll('.list-group-flush #list-skill-unlock')[0].innerText = this._itemConstellation.unlock;
            this.querySelectorAll('.list-group-flush #list-skill-unlock')[1].innerText = this._itemConstellation.description;
            this.querySelector('.list-group-flush #list-skill-unlock #level').innerText = this._itemConstellation.level;
        }
    }
}

customElements.define('card-item', ItemConstellation);
