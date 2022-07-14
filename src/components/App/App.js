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


function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const jwt = localStorage.getItem('jwt');
    const [savedMovies, setSavedMovies] = React.useState([]);
    // const [loggedIn, setLoggedIn] = React.useState(false);
    const [auth, setAuth] = React.useState({
        email: "",
        name: ""
    })

    useEffect(() => {
        if (!auth.email || !auth.name) {
            tokenCheck();
        }
    }, []);

    function tokenCheck() {
        if (jwt) {
            return getUserInfo(jwt)
        }

    }

    const getUserInfo = (jwt) => {
        return mainApi.getUserInfo(jwt)
            .then((data) => {
                setAuth({
                    ...auth,
                    email: data.email,
                    name: data.name
                });
                navigate('/movies');
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
                            email: user.email,
                            name: user.name
                        });
                    })
                navigate('/movies');
            })
            .catch(data => console.log(data));
    }

    const signOut = () => {
        localStorage.removeItem('jwt');
        navigate('/signin');
        setAuth({
            name: '',
            email: ''
        })
    }

    const addSavedMovie = (movie) => {
        mainApi.addMovie(movie)
            .then((movie) => {
                setSavedMovies({
                    movie,
                    ...savedMovies,
                })
            })
            .catch((data) => {
                console.log(data);
            })
    }

    // const handleSaveImage = (isSaved) => {
    //     if (location.pathname === '/saved-movies') {
    //         return <img className="card__delete-icon" src={deleteCard} alt="Значок удаления закладки"/>
    //     } else if (isSaved) {
    //         return <img src={unbookmark} alt="Значок закладки активный"/>
    //     } else {
    //         return <img src={bookmark} alt="Значок закладки неактивный"/>
    //     }
    // }


    const checkHeaderPath = () => {
        const routesWithHeader = ["/", "/movies", "/saved-movies", "/profile"];

        return routesWithHeader.map((path, index) =>
            location.pathname === path
                ? <Header key={index}/>
                : null)
    }

  return (
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
                          // handleSaveCard={handleSaveCard}
                          // handleSaveImage={handleSaveImage}
                      />
                      <Footer/>
                  </>
              }/>
              <Route path="/saved-movies" element={
                  <>
                      <SavedMovies/>
                      <Footer/>
                  </>
              }/>
              <Route path="/profile" element={ <Profile signOut={signOut}/> }/>
              <Route path="/*" element={ <NotFound/> }/>
          </Routes>
      </div>
  );
}

export default App;
