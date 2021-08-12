import "./desc-chara.js";

class ProfileCharacter extends HTMLElement {

    constructor(){
        super();

    }

    set profileChara(profChara){
        this._profileChara = profChara;
        this.render();
    }

    render(){
        this.innerHTML = `
            <h6>birthday : ${this._profileChara.birthday}</h6>
            <h2 class="title-chara">${this._profileChara.name}</h2>
        `
        const descCharacter = document.createElement("desc-chara");
        descCharacter.descChara = this._profileChara
        descCharacter.setAttribute('class', 'row mb-4');
        this.appendChild(descCharacter);
    }
}

customElements.define('prof-chara', ProfileCharacter);