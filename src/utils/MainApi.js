export class MainApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _respond(res) {
        return res.ok
          ? res.json()
          : Promise.reject(`Something went wrong: ${res.status}`)
      ;
    }
  
    // getUserInfo() {
    //   return fetch(`${this._baseUrl}/users/me`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //     }
    //   }).then(this._respond);
    // }
  
    getSavedArticles(token) {
      return fetch(`${this._baseUrl}/articles`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        }
      }).then(this._respond);
    }
  
    saveArticle(article, keyword) {
        return fetch(`${this._baseUrl}/articles/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify(article, keyword),
        }).then(this._respond);;
      }


    deleteArticle(id) {
      return fetch(`${this._baseUrl}/articles/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }).then(this._respond);;
    }
  }
  
  //initializing api
  
  
  let node_env = 'production';
  
  let baseUrl = 'http://localhost:3001' 
  // node_env === 'production'
//   ? 'https://newsxplorerdevgrafov.students.nomoredomainssbs.ru'
//   : 'https://newsxplorerdevgrafov.students.nomoredomainssbs.ru';
  
  
  //let baseUrl = 'https://newsxplorerdevgrafov.students.nomoredomainssbs.ru';
  
  
  const mainApi = new MainApi({
   baseUrl
  });
  
  export default mainApi;
  
  
  /*const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
      authorization: "b451294b-44d9-464a-8874-2d4137a4eb3c",
      "Content-Type": "application/json",
    },
  });
  
  export default api;
  */
  