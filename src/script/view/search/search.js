/* eslint-disable no-restricted-globals */
/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-vars */
import DataCharacter from '../../data/data-source';

const search = (tag, render) => {
    const searchElement = document.querySelector('search-bar');
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataCharacter.getDetailItem(`/${tag}/${searchElement.value.replace(' ', '-')}`);
            result.link = `https://api.genshin.dev/${tag}/${searchElement.value.replace(' ', '-')}`;
            if (result === undefined) throw '404 not-found';
            else render(result);
        } catch (error) {
            console.error(error);
            alert('Maaf pencarian tidak ditemukan');
            location.reload();
        }
        return true;
    };
    searchElement.clickEvent = onButtonSearchClicked;
};

export default search;
