
class ItemConstellation extends HTMLElement{

    constructor(){
        super();
    }

    set itemConstellation(constellation){
        this._itemConstellation = constellation;
    }

    connectedCallback(){
        this._classList = this.getAttribute("class");
        this._style = this.getAttribute("style");
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="p-lg-3 text-center">
                <h5 class="card-title">${this._itemConstellation.name}</h5> 
            </div>
            <ul class="ps-0 list-group-flush">
                <li class="list-group-item bg-grey-more">${this._itemConstellation.unlock}</li>
                <li class="list-group-item bg-grey-more overflow-auto" style="height: 200px  ;">${this._itemConstellation.description}</li>
                <li class="list-group-item bg-grey-more"><span>Level : </span> <span id="level">${this._itemConstellation.level}</span></li>
            </ul> 
        `
    }
}

customElements.define('item-constellation', ItemConstellation);