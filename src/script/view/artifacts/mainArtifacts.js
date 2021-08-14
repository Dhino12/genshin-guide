import DataCharacter from "../../data/data-source";
import EffectSkill from "../effect/effect";

const artifacts = () => {
    
    const getListGrid = document.querySelector("list-card-grid");

    const loadDataArtifacts = async() => {
        try{
            const listArtefacts = await DataCharacter.getListName("artifacts");
            renderResult(listArtefacts);
        }catch(e){
            console.log(`error : ${e}`);
        }
    }

    const renderResult = results => {
        getListGrid.listConstellations = results;
        detailArtifacts(results);
    }

    loadDataArtifacts();

    EffectSkill.navActive();
    EffectSkill.headerScrolEffect();
}

export default artifacts;