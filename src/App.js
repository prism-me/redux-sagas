import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './App.css';
import { useDispatch } from 'react-redux';
import { languageChange, setLanguage } from './state/feature/reducers';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  // const lanfn = () => dispatch(languageChange("arrrr"));

  useEffect(() => {

  },[]);
  return (
    <div className="App">
      <header>
        Header
      </header>

      <Routes>
        <Route default path="/home"  element={<Home />}/>
        <Route path="/about"  element={<About />}/>
      </Routes>

    </div>
  );
}

export default App;
