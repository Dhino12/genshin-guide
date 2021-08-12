class TabItem extends HTMLElement{
    constructor(){
        super() 
    }

    set tab(tabIcon){
        this._tabIconItem = tabIcon;
    }

    connectedCallback(){
        this._classList = this.getAttribute("class") || null;
        this.render();
    }

    render(){
        this.innerHTML = ` 
            <img src="https://api.genshin.dev/characters/${this._tabIconItem}/icon.webp" alt="icon-chara" class="rounded-circle" width="85px">
        `;
    }
}

customElements.define('tab-item', TabItem); 