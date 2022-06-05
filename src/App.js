import './App.css';
import React, { useRef, useState } from 'react';
import Box from './Box';

function App() {
  const appRef = useRef(null);
  const [boxes, setBoxes] = useState([]);
  return (
    <div
      className="App"
      ref={appRef}
      onClick={(e) => {
        if (e.target === e.currentTarget && e.detail > 1) {
          setBoxes([...boxes, <Box appRef={appRef} />]);
        }
      }}
    >
      {boxes.map((box) => box)}
      Double click page to add sin wave, double click box to turn on and off
    </div>
  );
}

export default App;
