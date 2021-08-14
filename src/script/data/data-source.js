const apiEndpoint = "http://api.genshin.dev"

class DataCharacter{ 
    static getListName(path){
        return fetch(`${apiEndpoint}/${path}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    return Promise.resolve(responseJson)
                }else{
                    return Promise.reject(`404 not-found`)
                }
            })
        
    }

    static getDetailItem(pathCharacter) {
        return fetch(`${apiEndpoint}${pathCharacter}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson){
                    return Promise.resolve(responseJson);
                }else{
                    return Promise.reject(`404 not-found / character tidak ditemukan`);
                }
            })
    }
}

export default DataCharacter;