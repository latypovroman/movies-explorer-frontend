class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _isResOk(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    register({ email, password, name }) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password, name }),
        }).then(this._isResOk)
    }

    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._isResOk)
    }

    getUserInfo(jwt) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            }
        })
            .then(this._isResOk)
    }

    addMovie(data) {
        const {
            duration,
            nameRU,
            nameEN,
            id
        } = data;

        const imageUrl = (data) => {
            return `https://api.nomoreparties.co${data.image.url}`
        }

        return fetch(`${this._url}/movies/`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                movieId: id,
                duration,
                image: imageUrl(data),
                nameRU,
                nameEN,
            })
        }).then(this._isResOk);
    }
}

const mainApi = new MainApi({
    url: "https://api.movies.app.nomoredomains.xyz",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
});

export default mainApi;