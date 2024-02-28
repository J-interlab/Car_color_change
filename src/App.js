import './App.css';
import Controller from './Controller';
import { useRef, useState } from 'react';
import {FOLDER_NAME, CAR_INDEX} from './Constants'

function App() {

  const containerRef = useRef();
  const style = {
    };
  const [carIndex, setCarIndex] = useState(CAR_INDEX);
  console.log(carIndex);
  return (
    <div className="App" margin="0">
      <iframe title="iframe" src={`/${FOLDER_NAME}/pc16.html`} style={style} frameBorder="0" ref={containerRef}></iframe>
      <Controller container={containerRef} carIndex={carIndex} setCarIndex={setCarIndex}></Controller>
    </div>
  );
}

export default App;
