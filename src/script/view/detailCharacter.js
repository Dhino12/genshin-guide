import DataCharacter from "../data/data-source.js";

const slideShow = () => { 
    const tabIndicator = document.querySelector("tab-indicators");
    const iconIndicator = document.querySelectorAll("tab-item img");
    const tabActive = document.getElementsByClassName(".p-active")[0];

    if(tabActive === undefined){
        iconIndicator[0].classList.add("p-active");
        detailCharacter(iconIndicator[0].src)
        
    }

    tabIndicator.addEventListener("click", function (e) {
        if (e.target.className == "rounded-circle") {
            detailCharacter(e.target.src);
            iconIndicator.forEach(e => {
                e.className = "rounded-circle";
            })
            e.target.classList.add("p-active");
        }
    })
}

const detailCharacter = (linkImage) => {
    const profCharaElement = document.querySelector("prof-chara");
    const listSkillTalentElement = document.querySelector("list-skill-telent");
    listSkillTalentElement.setAttribute("class", "carousel slide d-block");
    listSkillTalentElement.setAttribute("id", "carousel-skill-telents");
    
    const listConstellation = document.querySelector("list-card-grid");

    const portraitChara = document.querySelector("#portrait-chara");
    portraitChara.src = getPathChara(linkImage, true);
    const resultPathChara = getPathChara(linkImage, false);

    const loadDetailChara = async() => {
        try{
            portraitChara.classList.add("placeholder");
            const profileCharacter = await DataCharacter.getDetailItem(resultPathChara);
            renderResult(profileCharacter);
        }catch(e){
            alert("Gagal mengambil data detail, internet dalam masalah");
        }
    }

    const renderResult = result => { 
        profCharaElement.profileChara = result;
        listSkillTalentElement.skillTalents = result.skillTalents;
        listConstellation.listConstellations = result.constellations;
        
        portraitChara.classList.remove("placeholder");
    }

    loadDetailChara();
}

const getPathChara = (linkImage, getImage) => {
    const getLengthEnpoint = linkImage.length;

    if(getImage === true){
        return linkImage.replace('icon', 'portrait');
    }

    if(getImage === false){
        return linkImage.slice(23, getLengthEnpoint).replace('icon.webp', '');
    }
} 

export default slideShow;