import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
       <About/>
       <Skill/>
       <Education/>
       <Work/>
       <Contact/>
    </div>
  );
}

export default App;
