import * as Tone from 'tone';

export function startSynth() {
  Tone.start();
  const synth = new Tone.Synth().toDestination();
  const crusher = new Tone.BitCrusher(1).toDestination();
  const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();
  const limiter = new Tone.Limiter(-20).toDestination();
  const fft = new Tone.FFT();
  synth.connect(fft);
  console.log('fft', fft);

  synth.triggerAttack(440);
  synth.triggerRelease();
  return synth;
}

export function playSynth(synth, note) {
  if (synth === 0) {
    //console.log('fucking');
  } else {
    synth.triggerAttack(note);
  }
}

export function stopSynth(synth) {
  if (synth === 0) {
    //console.log('fucking');
  } else {
    synth.triggerRelease();
  }
}
export function changeNote(synth, note) {
  if (synth === 0) {
    //console.log('fucking');
  } else {
    //console.log('changing note', note);

    synth.setNote(note, '4n');
  }
}

export function changeVolume(synth, newVolume) {
  if (synth === 0) {
    // console.log('newvol fuck');
  } else {
    let volume = -newVolume / 15 + 35;

    synth.volume.value = volume;
  }
}

// export default Synth
