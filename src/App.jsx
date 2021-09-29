import {useEffect} from "react";
import {init} from "./services/api";
import './App.css';
import Artist from './pages/artist';

function App() {
  useEffect(()=>{
    init().get("http://localhost:3001/");
  },[])
  return (
    <div className="App">
      <Artist/>
    </div>
  );
}

export default App;
