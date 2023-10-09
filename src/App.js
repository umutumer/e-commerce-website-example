
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Data } from './Data/Data';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home data ={Data} />
    </div>
  );
}

export default App;
