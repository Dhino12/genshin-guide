import artifacts from './script/view/artifacts/mainArtifacts';

if (window.location.pathname.split('/')[1] === 'artifacts.html') {
    document.addEventListener('DOMContentLoaded', artifacts);
}
