import './App.css'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Service from './components/service/Service';
import Experience from './components/experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
