import slideShow from "./detailCharacter.js";
import DataCharacter from "../data/data-source.js";
import EffectSkill from "./effect/effect.js";

const main = () => { 
    const tabIndicators = document.querySelector("tab-indicators");
    
    const onLoadedTabIndicators = async () => {
        try {
            const data = await DataCharacter.getListName("characters"); 
            renderResult(data);

        } catch (error) { 
            alert("Maaf internet sudang dalam gangguan coba lagi nanti");
            console.error("error: " + error);
        } 
    }

    const renderResult = results => {
        tabIndicators.tabs = results;
        EffectSkill.navActive();
        slideShow();
    }

    onLoadedTabIndicators();

    EffectSkill.headerScrolEffect();
    EffectSkill.skillSlider();

}

export default main;