import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Route, Routes } from 'react-router-dom';
import Footer from "../Footer/Footer";
import React from "react";
import SavedMovies from "../SavedMovies/SavedMovies";


function App() {
  return (
      <div className="page">
              <Header/>
          <Routes>
              <Route exact path="/" element={ <Main/> }/>
              <Route path="/movies" element={ <Movies/> }/>
              <Route path="/saved-movies" element={ <SavedMovies/> }/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
