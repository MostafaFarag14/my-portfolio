import React from 'react';
import './App.css';
import Header from '../header/header'
import Main from '../main/main'
import About from '../about/about'
import Contact from '../contact/contact'
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
