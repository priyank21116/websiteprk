import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    

     <Router>
     
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </Router>
      
   
  );
}

export default App;
