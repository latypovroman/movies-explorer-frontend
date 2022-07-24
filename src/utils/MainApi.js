
class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
        this._jwt = localStorage.getItem('jwt');
    }

    _isResOk(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    register({ email, password, name }) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password, name }),
        })
            .then(this._isResOk)
    }

    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._isResOk)
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
            .then(this._isResOk)
    }

    patchUserInfo(email, name) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${this._jwt}`,
            },
            body: JSON.stringify({ email, name })
        })
            .then(this._isResOk)
    }

    addMovie(data) {
        const {
            duration,
            country,
            director,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN,
            id
        } = data;

        const imageUrl = () => {
            return `https://api.nomoreparties.co${data.image.url}`
        }
        const thumbnailUrl = () => {
            return `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
        }

        return fetch(`${this._url}/movies/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${this._jwt}`,
            },
            body: JSON.stringify({
                movieId: id,
                duration,
                country,
                director,
                trailerLink,
                year,
                description,
                thumbnail: thumbnailUrl(),
                image: imageUrl(),
                nameRU,
                nameEN,
            })
        }).then(this._isResOk);
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies/`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${this._jwt}`,
            }
        })
            .then(this._isResOk)
    }

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${this._jwt}`,
            }
        })
            .then(this._isResOk)
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