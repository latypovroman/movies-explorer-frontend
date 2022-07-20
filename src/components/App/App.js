import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import deleteCard from "../../images/wbutton-x.svg";
import unbookmark from "../../images/wbutton-unsave.svg";
import bookmark from "../../images/wbutton-save.svg";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [auth, setAuth] = React.useState({});

    useEffect(() => {
        tokenCheck();
    }, []);

    useEffect(() => {
        getThisUserSavedMovies();
    }, [auth]);

    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            return getUserInfo();
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
            .then(() => navigate('/signin'))
            .catch(data => console.log(data));
    }

    const handleLogin = (email, password) => {
        mainApi.authorize(email, password)
            .then((user) => {
                localStorage.setItem('jwt', user.token);
                mainApi.getUserInfo(user.token)
                    .then((user) => {
                        setAuth({
                            id: user._id,
                            email: user.email,
                            name: user.name
                        });
                    })
                navigate('/movies');
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
        navigate('/signin');
        setAuth({
            name: '',
            email: '',
            id: '',
        })
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
        mainApi.deleteMovie(movieForDelete._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((movie) => {
                    return movie._id !== movieForDelete._id
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
                  <Route path="/signup" element={ <Register handleRegister={handleRegister}/> }/>
                  <Route path="/signin" element={ <Login handleLogin={handleLogin}/> }/>
                  <Route path="/movies" element={
                      <>
                          <Movies
                              addSavedMovie={addSavedMovie}
                              savedMovies={savedMovies}
                              deleteSavedMovie={deleteSavedMovie}
                          />
                          <Footer/>
                      </>
                  }/>
                  <Route path="/saved-movies" element={
                      <>
                          <SavedMovies savedMovies={savedMovies} deleteMovie={deleteSavedMovie}/>
                          <Footer/>
                      </>
                  }/>
                  <Route path="/profile" element={
                      <Profile signOut={signOut} changeProfileInfo={changeUserInfo}/>
                  }/>
                  <Route path="/*" element={ <NotFound/> }/>
              </Routes>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
