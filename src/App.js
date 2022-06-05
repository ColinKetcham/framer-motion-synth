import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
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
    </div>
  );
}

export default App;
