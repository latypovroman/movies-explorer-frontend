import './App.css';
import Header from '../../components/Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
      <div className="page">
          <Header/>
          <Main/>
          <Movies/>
      </div>
  );
}

export default App;
