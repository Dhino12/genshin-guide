import slideShow from './detailCharacter';
import DataCharacter from '../data/data-source';
import EffectSkill from './effect/effectPage';
import search from './search/search';

const main = () => {
    const tabIndicators = document.querySelector('tab-indicators');

    const renderResult = (results) => {
        tabIndicators.tabs = results;
        EffectSkill.navActive();
        slideShow();
    };

    const onLoadedTabIndicators = async () => {
        try {
            const data = await DataCharacter.getListName('characters');
            renderResult(data);
        } catch (error) {
            alert('Maaf internet sudang dalam gangguan coba lagi nanti');
            console.error(`error: ${error}`);
        }
    };

    onLoadedTabIndicators();
    search('characters');

    EffectSkill.headerScrolEffect();
    EffectSkill.skillSlider();
};

export default main;
