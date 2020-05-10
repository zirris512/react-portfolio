import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Router>
       <Nav />
       <Route exact path="/" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/portfolio" component={Portfolio}/>
       <Footer />
    </Router>
  );
}

export default App;
