import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [auth, setAuth] = React.useState({});

    useEffect(() => {
        tokenCheck();
    }, []);

    useEffect(() => {
        if (auth.id) {
            getThisUserSavedMovies();
        }
    }, [auth]);

    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            console.log('ok')
            getUserInfo();
        }

    }

    function getThisUserSavedMovies() {
        return mainApi.getSavedMovies()
            .then((movies) => {
                const userSavedMovies = movies.filter((movie) => {
                    return movie.owner === auth.id
                });
                setSavedMovies(userSavedMovies);
            })
            .catch((data) => {
                console.log(data);
            })
    }

    const getUserInfo = () => {
        return mainApi.getUserInfo()
            .then((user) => {
                    setAuth({
                        ...auth,
                        id: user._id,
                        email: user.email,
                        name: user.name
                    });
            })
            .catch((data) => console.log(data))
    }

    const handleRegister = (user) => {
        mainApi.register(user)
            .then(() => {
                const {email, password} = user;
                handleLogin(email, password);
            })
            .catch(data => console.log(data));
    }

    const handleLogin = (email, password) => {
        mainApi.authorize(email, password)
            .then((user) => {
                localStorage.setItem('jwt', user.token)
                getUserInfo();
            })
            .catch(data => console.log(data));
    }

    const changeUserInfo = ({ email, name }) => {
        mainApi.patchUserInfo(email, name)
            .then((user) => {
                setAuth({
                    ...auth,
                    id: user._id,
                    email: user.email,
                    name: user.name
                });
            })
            .catch(data => console.log(data));
    }

    const signOut = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem(`${auth.id}-stored-filter`);
        setAuth({});
        navigate('/');
    }

    const addSavedMovie = (movie) => {
        mainApi.addMovie(movie)
            .then((movie) => {
                setSavedMovies([
                    movie,
                    ...savedMovies,
                ])
            })
            .catch((data) => {
                console.log(data);
            })
    }

    const deleteSavedMovie = (movieForDelete) => {
        const getMainId = savedMovies.find((movie) => {
            return movie.movieId === (movieForDelete.id || movieForDelete.movieId)
        });

        mainApi.deleteMovie(getMainId._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((movie) => {
                    return movie._id !== getMainId._id
                }))
            })
            .catch(data => console.log(data));
    }

    const checkHeaderPath = () => {
        const routesWithHeader = ["/", "/movies", "/saved-movies", "/profile"];
        return routesWithHeader.map((path) =>
            location.pathname === path
                ? <Header key={path}/>
                : null)
    }

  return (
      <CurrentUserContext.Provider value={auth}>
          <div className="page">
              { checkHeaderPath() }
              <Routes>
                  <Route path="/" element={ <><Main/><Footer/></> }/>
                  <Route path="/signup" element={
                      auth.id
                          ? <Navigate to="/movies"/>
                          : <Register handleRegister={handleRegister}/>
                  }/>
                  <Route path="/signin" element={
                      auth.id
                          ? <Navigate to="/movies"/>
                          : <Login handleLogin={handleLogin}/>
                  }/>
                  <Route path="/movies" element={
                      <PrivateRoute>
                          <Movies
                              addSavedMovie={addSavedMovie}
                              savedMovies={savedMovies}
                              deleteSavedMovie={deleteSavedMovie}
                          />
                          <Footer/>
                      </PrivateRoute>
                  }/>
                  <Route path="/saved-movies" element={
                      <PrivateRoute>
                          <
                              SavedMovies
                              savedMovies={savedMovies}
                              deleteMovie={deleteSavedMovie}
                          />
                          <Footer/>
                      </PrivateRoute>
                  }/>
                  <Route path="/profile" element={
                      <PrivateRoute>
                        <Profile signOut={signOut} changeProfileInfo={changeUserInfo}/>
                      </PrivateRoute>
                  }/>
                  <Route path="/*" element={ <NotFound/> }/>
              </Routes>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
