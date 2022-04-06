import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Start from './components/Start';
import Team from './components/Team';
import Contact from './components/Contact';
import './styles/App.scss';

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="App">
      <Navigation/>
      <main className='Main snaps'>
        <Start/>
        <Services/>
        <Team/>
        <Contact/>
      </main>
      <Footer/>
      <div className='copyright__container'>
          <p className='copyright'>TabTeam &copy; {year}</p>
      </div>
    </div>
  );
}

export default App;
