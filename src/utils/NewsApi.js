class NewsApi{
    constructor({url, key}){
        this.url = url;
        this.key = key;
        this.time = new Date();
    }


    _respond(res) {
        return res.ok
          ? res.json()
          : Promise.reject(`Something went wrong: ${res.status}`)
      ;
    }

    _getWeek(){
        const today = new Date();
        let dateRange = new Date();

        dateRange = dateRange.setDate(today.getDate()-7)

        return dateRange;
    }

    getArticles(searchTerm){
        const getWeek = this._getWeek();
        return fetch(`${this.url}?q=${searchTerm}&apiKey=${this.key}&from=${getWeek}&to=${this.time}&pageSize=100`)
        .then(this._respond);
    }

}

const newsApi = new NewsApi({
    url: 'https://nomoreparties.co/news/v2/everything',
    key: 'c7556585b6ca4cbe805fdb777cbbc7b4' 
})

export default newsApi;
