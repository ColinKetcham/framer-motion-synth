import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import {
  startSynth,
  changeNote,
  changeVolume,
  playSynth,
  stopSynth,
} from './Synth';
import * as Tone from 'tone';

const Box = ({ appRef }) => {
  const [pagex, setX] = useState(0);
  const [pagey, setY] = useState(0);
  const [synth, setSynth] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setSynth(startSynth());
  }, []);
  useEffect(() => {
    if (playing) {
      console.log('plauing');
      playSynth(synth, pagex);
    } else {
      stopSynth(synth);
    }
  }, [playing]);
  useEffect(() => {
    changeNote(synth, pagex);
  }, [pagex]);
  useEffect(() => {
    changeVolume(synth, pagey);
  }, [pagey]);

  return (
    <motion.div
      drag
      dragConstraints={appRef}
      className={playing ? 'box playing' : 'box notPlaying'}
      onClick={(e) => {
        if (e.detail > 1) {
          setPlaying(!playing);
        }
      }}
      onDrag={(test) => {
        setX(test.pageX);
        setY(test.pageY);
      }}
    ></motion.div>
  );
};

export default Box;
