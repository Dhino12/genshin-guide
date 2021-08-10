import "../component/tab-indicators.js"
import DataCharacter from "../data/data-source.js";

const main = () => {
    const rowTabCharacter = document.querySelector("div.row");
    const tabIndicators = document.querySelector("tab-indicators");
    // const dataCharacter = new DataCharacter();

    const onLoadedTabIndicators = async () => {
        try {
            const data = await DataCharacter.getChara();
            console.log(data);
            renderResult(data);
        } catch (error) {
            
        }
        
    }

    const renderResult = results => {
        tabIndicators.tabs = results
    }

    onLoadedTabIndicators();
}

export default main;