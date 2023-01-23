import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Popup from './components/Popup';



function App() {
  return (

      <div className='App' id='home'>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Popup />
      </div>
  );
}

export default App;
