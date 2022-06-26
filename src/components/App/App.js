import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Route, Switch } from 'react-router-dom';
import Footer from "../Footer/Footer";
import React from "react";

function App() {
  return (
      <div className="page">
              <Header/>
          <Switch>
              <Route exact path="/">
                  <Main/>
              </Route>
              <Route path="/movies">
                  <Movies/>
              </Route>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
