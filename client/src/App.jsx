import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Start from './components/Start';
import Team from './components/Team';
import Contact from './components/Contact';
import './styles/App.scss';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo as infoCircleSolid } from '@fortawesome/free-solid-svg-icons'

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="App">
      <Navigation/>
      <main>
        <Start/>
        <Services/>
        <Team/>
        <Contact/>
        <Link 
          to='footer'
          smooth={true}
          duration={300}
        >
          <div className='go-bottom-button'>
            <FontAwesomeIcon icon={infoCircleSolid} className='go-bottom-icon'/>
          </div>
        </Link>
      </main>
      <Footer/>
      <div className='copyright__container'>
          <p className='copyright'>TabTeam &copy; {year}</p>
      </div>
    </div>
  );
}

export default App;
