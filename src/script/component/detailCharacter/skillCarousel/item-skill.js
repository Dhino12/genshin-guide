/* eslint-disable no-underscore-dangle */
class ItemSkill extends HTMLElement {
    constructor() {
        super();
    }

    set itemSkill(skillChara) {
        this._itemSkill = skillChara;
    }

    connectedCallback() {
        this._classList = this.getAttribute('class');
        this.render();
    }

    render() {
        let _tmpUpSkill = '';
        let _tmpNameSkill = '';

        if (this._itemSkill !== undefined) {
            if (this._itemSkill.upgrades !== undefined) {
                this._itemSkill.upgrades.forEach((item) => {
                    _tmpUpSkill += `<div class="col-2"><p class="bg-young-red">${item.name}</p></div>`;
                });
                this._itemSkill.upgrades.forEach((item) => {
                    _tmpNameSkill += `<div class="col-2"><p id="value-weapon" class="bg-white-skill">${item.value}</p></div>`;
                });
            }

            this.innerHTML = `
            <h4>${this._itemSkill.name}</h4>
            <h6 style="color:#0F3460;">${this._itemSkill.unlock}</h6>
            <p>${this._itemSkill.description}</p>
            <div class="d-flex flex-column horizontal-scroll" id="skill_telents">
                <div class="d-flex mb-4">${(_tmpUpSkill === undefined) ? '' : _tmpUpSkill}</div>
                <div class="d-flex mb-4">${(_tmpNameSkill === undefined) ? '' : _tmpNameSkill}</div> 
            </div>
        `;
        }
    }
}

customElements.define('item-skill', ItemSkill);
