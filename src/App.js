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
      Double click page to add sin wave, double click box to turn on and off.
      Move box Left and Right to change pitch, and up and down to change volume.
      {boxes.map((box) => box)}
    </div>
  );
}

export default App;
