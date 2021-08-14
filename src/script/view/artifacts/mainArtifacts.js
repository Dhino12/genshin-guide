import DataCharacter from '../../data/data-source';
import EffectSkill from '../effect/effectPage';
import search from '../search/search';

const artifacts = () => {
    const getListGrid = document.querySelector('list-card-grid');

    const renderResult = (results) => {
        getListGrid.listConstellations = results;
    };

    const loadDataArtifacts = async () => {
        try {
            const listArtefacts = await DataCharacter.getListName('artifacts');
            renderResult(listArtefacts);
        } catch (e) {
            console.log(`error : ${e}`);
        }
    };

    loadDataArtifacts();

    EffectSkill.navActive();
    EffectSkill.headerScrolEffect();

    search('artifacts', renderResult);
};

export default artifacts;
