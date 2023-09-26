
import React from 'react';
import './index.css';
import EventCalender from './components/EventCalender';
import ArtistPortfolio from './components/ArtistPortfolio';
import Navbar from './components/Navbar.js';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <main>
        <About />
        <ArtistPortfolio />
        <EventCalender />
      </main>
    </div>
  );
}

export default App;

