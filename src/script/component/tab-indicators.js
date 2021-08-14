/* eslint-disable no-underscore-dangle */
import './tab-item';

class TabIndicators extends HTMLElement {
    constructor() {
        super();
    }

    set tabs(tabsIcon) {
        this._tabsIcon = tabsIcon;
        this.render();
    }

    connectedCallback() {
        this.setAttribute('class', 'd-flex');
    }

    render() {
        this.innerHTML = '';
        this._tabsIcon.forEach((iconTab) => {
            const tabItemElement = document.createElement('tab-item');
            tabItemElement.tab = iconTab;
            tabItemElement.setAttribute('class', 'col-1 ms-2');
            this.appendChild(tabItemElement);
        });
    }
}

customElements.define('tab-indicators', TabIndicators);
