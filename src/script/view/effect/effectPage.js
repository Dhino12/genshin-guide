import { Carousel } from 'bootstrap/dist/js/bootstrap.esm.min';

class EffectSkill {
    static headerScrolEffect() {
        document.addEventListener('scroll', () => {
            const getHeader = document.getElementsByClassName('header')[0];
            const scrollWindow = window.scrollY;
            if (scrollWindow > 50) {
                getHeader.classList.add('bg-header-scroll');
            } else {
                getHeader.classList.remove('bg-header-scroll');
            }
        });
    }

    static navActive() {
        const navLinkText = document.querySelectorAll('.nav-link span');
        const navLink = document.querySelectorAll('.nav-link');
        const titlePage = document.querySelector('.title-page');

        navLinkText.forEach((element, index) => {
            if (element.innerText == titlePage.innerText) {
                navLink[index].classList.add('active-page');
            } else {
                navLink[index].classList.add('nav-link', 'mb-2');
            }
        });
    }

    static skillSlider() {
        // eslint-disable-next-line no-unused-vars
        const slideSkill = new Carousel(document.querySelector('.carousel'));
        console.log(slideSkill);
    }
}

export default EffectSkill;
