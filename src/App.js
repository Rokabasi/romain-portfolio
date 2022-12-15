import './App.css'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Service from './components/service/Service';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
    </div>
  );
}

export default App;
