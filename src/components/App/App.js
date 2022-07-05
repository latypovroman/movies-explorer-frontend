import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from "../Footer/Footer";
import React from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";


function App() {

    const location = useLocation();


    const checkHeaderPath = () => {
        const routesWithHeader = ["/", "/movies", "/saved-movies", "/profile"];

        return routesWithHeader.map((path, index) => location.pathname === path ? <Header key={index}/> : null)
    }

  return (
      <div className="page">
          { checkHeaderPath() }
          <Routes>
              <Route path="/" element={ <><Main/><Footer/></> }/>
              <Route path="/signup" element={ <Register/> }/>
              <Route path="/signin" element={ <Login/> }/>
              <Route path="/movies" element={ <><Movies/><Footer/></> }/>
              <Route path="/saved-movies" element={ <><SavedMovies/><Footer/></> }/>
              <Route path="/profile" element={ <Profile/> }/>
              <Route path="/*" element={ <NotFound/> }/>
          </Routes>
      </div>
  );
}

export default App;
