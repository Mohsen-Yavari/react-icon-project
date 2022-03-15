import React from 'react';

import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

import Navigation from './components/Navigation';
import Home from "./components/section/Home";
import About from "./components/section/About";
import Roadmap from "./components/section/Roadmap";
import ShoeCase from "./components/section/ShoeCase";
import Them from "./components/section/Them";
import Faq from "./components/section/Faq";
import Footer from "./components/Footer";

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
         <Router>
           <Navigation />
            <Routes>
              
              
              <Route path="/about" element={<About /> } />
              <Route path="/roadmap" element={<Roadmap /> } />
              <Route path="/showcase" element={<ShoeCase /> } />
              <Route path="/team" element={<Them /> } />
              <Route path="/team" element={<Them /> } />
              <Route path="/fag" element={<Faq /> } />
              <Route path="/" element={<Home /> } />
            </Routes>
            <Footer />
          </Router>
          

    </>
  );
}

export default App;
