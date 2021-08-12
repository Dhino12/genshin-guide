const apiEndpoint = "http://api.genshin.dev"

class DataCharacter{ 
    static getNameChara(){
        return fetch(`${apiEndpoint}/characters`)
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

    static getDetailChara(pathCharacter) {
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