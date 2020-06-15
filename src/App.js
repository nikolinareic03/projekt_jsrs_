import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Loodo from './Components/Loodo.js';
import Majice from './Components/Majice.js';
import Hlače from './Components/Hlače.js';
import Haljine from './Components/Haljine.js';
import Narudžba from './Components/Narudžba.js';



function App() {
  return (
    <div>

      <Header></Header>

      <Router>
        <Route exact path = "/" component = {Loodo}></Route>
        <Route path = "/Majice" component = {Majice}></Route>
        <Route path = "/Hlače" component = {Hlače}></Route>
        <Route path = "/Haljine" component = {Haljine}></Route>
        <Route path = "/Narudžba" component = {Narudžba}></Route>
      </Router>

      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
