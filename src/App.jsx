import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import GitHub from './Components/Github/GitHub';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Tools from './Components/Tools/Tools';

function App() {
  return (
    <div className="App" style={{backgroundColor: "rgb(13, 25, 51)", color: "#e2dede"}}>
        {/* <Navbar/> */}
        <Skills/>
        <Tools/>
        <Contact/>
    </div>
  );
}

export default App;
