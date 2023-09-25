
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import EventDetails from './components/EventDetails';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/event/:id" component={EventDetails} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import './App.css';
import EventCalender from './components/EventCalender';
import ArtistPortfolio from './components/ArtistPortfolio';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Artist Portfolio</h1>
      </header>
      <main>
        
        <ArtistPortfolio />
        <EventCalender />
      </main>
    </div>
  );
}

export default App;

