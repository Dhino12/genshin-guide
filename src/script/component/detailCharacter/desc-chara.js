class DescChara extends HTMLElement { 
    constructor() {
        super();
    }

    set descChara(descChara) {
        this._descChara = descChara;
    }

    connectedCallback() {
        this._classList = this.getAttribute("class") || null;
        this.render();
    }

    render() {
        let stars = "";
        for (let index = 0; index < this._descChara.rarity; index++) {
            stars += '<i class="fa fa-star me-2" style="color: #E94560;" aria-hidden="true"></i>'
            
        }; 

        this.innerHTML = `
        <div class="col-6 col-sm-4 mb-2"> ${stars} </div>
        <p>${this._descChara.description}</p>
        <div class="row mb-3">
            <div class="col-2"><p class="bg-young-red">WEAPON</p></div>
            <div class="col-2 ms-5 me-5"><p id="value-weapon" class="bg-white">${this._descChara.weapon}</p></div>

            <div class="col-2"><p class="bg-young-red">VISION</p></div>
            <div class="col-2 ms-5"><p id="value-weapon" class="bg-white">${this._descChara.vision}</p></div> 
        </div> 
        <div class="row mb-3">
            <div class="col-2"><p class="bg-young-red">AFFILIATION</p></div>
            <div class="col-2 ms-5 me-5"><p id="value-weapon" class="bg-white">${this._descChara.affiliation}</p></div>

            <div class="col-2"><p class="bg-young-red">NATION</p></div>
            <div class="col-2 ms-5"><p id="value-weapon" class="bg-white">${this._descChara.nation}</p></div>
        </div>
        `
    }
}

customElements.define('desc-chara', DescChara);