class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _isResOk(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }

    getBeatMovies() {
        return fetch( `${this._url}`, {
            headers: this._headers,
        }).then(this._isResOk);
    }
}

// const token = localStorage.getItem('jwt');

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

export default moviesApi;