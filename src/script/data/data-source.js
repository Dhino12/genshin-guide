const apiEndpoint = "http://api.genshin.dev"

class DataCharacter{ 
    static getChara(){
        return fetch(`${apiEndpoint}/characters`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson)
                }else{
                    return Promise.reject(`404 not-found`)
                }
            })
        
    }

    getCharaIcon() {
        const a = this.getChara();
        // console.log(this._chara);
        // return this._chara.forEach(chara => { 
        //     console.log(chara);
        // })
    }
}

export default DataCharacter;