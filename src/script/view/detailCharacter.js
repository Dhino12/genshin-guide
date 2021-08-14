/* eslint-disable no-restricted-syntax */
import DataCharacter from '../data/data-source';
import search from './search/search';
import getPathChara from './utility/getPathChara';

const detailCharacter = (linkImage) => {
    const listSkillTalentElement = document.querySelector('list-skill-telent');
    const listConstellation = document.querySelector('list-card-grid');
    const profCharaElement = document.querySelector('prof-chara');
    const portraitChara = document.querySelector('#portrait-chara');

    const resultPathChara = getPathChara(linkImage, false);
    portraitChara.src = getPathChara(linkImage, true);

    const renderResult = (result) => {
        profCharaElement.profileChara = result;
        listSkillTalentElement.skillTalents = result.skillTalents;
        listConstellation.listConstellations = result.constellations;

        if (result.link !== undefined) portraitChara.src = `${result.link}/portrait.webp`;

        portraitChara.classList.remove('placeholder');
    };

    const loadDetailChara = async () => {
        try {
            portraitChara.classList.add('placeholder');
            const profileCharacter = await DataCharacter.getDetailItem(resultPathChara);
            renderResult(profileCharacter);
        } catch (e) {
            alert('Gagal mengambil data detail, internet dalam masalah');
        }
    };

    search('characters', renderResult);

    loadDetailChara();
};

const slideShow = (changeTab) => {
    const tabIndicator = document.querySelector('tab-indicators');
    const iconIndicator = document.querySelectorAll('tab-item img');
    const tabActive = document.getElementsByClassName('.p-active')[0];

    if (tabActive === undefined) {
        // get data default show
        iconIndicator[0].classList.add('p-active');
        detailCharacter(iconIndicator[0].src);
    }

    tabIndicator.addEventListener('click', (e) => {
        if (e.target.className == 'rounded-circle') {
            detailCharacter(e.target.src);
            iconIndicator.forEach((element) => {
                const img = element;
                img.className = 'rounded-circle';
            });
            e.target.classList.add('p-active');
        }
    });

    if (changeTab !== undefined) {
        for (const icon of iconIndicator) {
            if (icon.src.includes(changeTab)) {
                detailCharacter(iconIndicator.src);
                iconIndicator.classList.add('p-active');
            }
            icon.className = 'rounded-circle';
        }
    }
};

export default slideShow;
