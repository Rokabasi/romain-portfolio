import './App.css'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Service from './components/service/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
    </div>
  );
}

export default App;
