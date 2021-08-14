import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import './style/style.css';
import './script/component/tab-indicators';
import './script/component/navigation/nav-container';
import './script/component/header/header';
import './script/component/detailCharacter/profile-chara';
import './script/component/detailCharacter/skillCarousel/list-skill-talent';
import './script/component/detailCharacter/constellation/list-card-grid';

import main from './script/view/main';

const locationLink = window.location.pathname;

if (locationLink === '/' || locationLink === '/index.html') {
    document.addEventListener('DOMContentLoaded', main);
}
