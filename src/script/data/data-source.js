/* eslint-disable prefer-promise-reject-errors */

const apiEndpoint = 'http://api.genshin.dev';

class DataCharacter {
    static getListName(path) {
        return fetch(`${apiEndpoint}/${path}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                }
                return Promise.reject('404 not-found');
            });
    }

    static getDetailItem(pathCharacter) {
        return fetch(`${apiEndpoint}${pathCharacter}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                }
                return Promise.reject('404 not-found / character tidak ditemukan');
            });
    }
}

export default DataCharacter;
