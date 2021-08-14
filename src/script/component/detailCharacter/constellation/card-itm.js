/* eslint-disable no-underscore-dangle */
class ItemConstellation extends HTMLElement {
    constructor() {
        super();
    }

    set itemConstellation(constellation) {
        this._itemConstellation = constellation;
    }

    connectedCallback() {
        this._classList = this.getAttribute('class');
        this._style = this.getAttribute('style');
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card" style="width: 18rem; background-color:#dadadad1">
                <img class="card-img-top" "200px" src="${
                    (this._itemConstellation.unlock === undefined)
                        ? `https://api.genshin.dev/artifacts/${this._itemConstellation}/flower-of-life.webp` : ''
                }">
                <div class="p-lg-3 text-center">
                    <h5 class="card-title">${(this._itemConstellation.name === undefined)
                        ? this._itemConstellation : this._itemConstellation.name}</h5> 
                </div>
                ${(this._itemConstellation.unlock === undefined) ? '' : `
                    <ul class="ps-0 list-group-flush">
                        <li class="list-group-item bg-grey-more">${this._itemConstellation.unlock}</li>
                        <li class="list-group-item bg-grey-more overflow-auto" style="height: 200px  ;">${this._itemConstellation.description}</li>
                        <li class="list-group-item bg-grey-more"><span>Level : </span> <span id="level">${this._itemConstellation.level}</span></li>
                    </ul> 
                `}
                
            </div>
        `;

        // search mode
        if (this._itemConstellation.max_rarity !== undefined) {
                this.innerHTML = `
                <div class="card" style="width: 18rem; background-color:#dadadad1">
                    <img class="card-img-top" "200px" src="${this._itemConstellation.link}/flower-of-life.webp">
                    <div class="p-lg-3 text-center">
                        <h5 class="card-title">${this._itemConstellation.name}</h5> 
                    </div>
                        <ul class="ps-0 list-group-flush">
                            <li class="list-group-item bg-grey-more">${this._itemConstellation['2-piece_bonus']}</li>
                            <li class="list-group-item bg-grey-more overflow-auto" style="height: 200px  ;">${this._itemConstellation['4-piece_bonus']}</li>
                            <li class="list-group-item bg-grey-more"><span>Level : </span> <span id="level">${this._itemConstellation.max_rarity}</span></li>
                        </ul> 
                </div>
            `;
        }
    }
}

customElements.define('card-item', ItemConstellation);
