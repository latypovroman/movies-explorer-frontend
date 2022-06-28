import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Route, Routes } from 'react-router-dom';
import Footer from "../Footer/Footer";
import React from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";


function App() {
  return (
      <div className="page">
              <Header/>
          <Routes>
              <Route exact path="/" element={ <Main/> }/>
              <Route path="/movies" element={ <><Movies/><Footer/></> }/>
              <Route path="/saved-movies" element={<><SavedMovies/><Footer/></>}/>
              <Route path="/profile" element={ <Profile/> }/>
              {/*<Route path="/movies" element={ <Footer />}/>*/}
          </Routes>
          {/*<Footer/>*/}
      </div>
  );
}

export default App;
