// CustomControls.js
import React from 'react';

function CustomControls({ playing, onPlayPause }) {
  return (
    <button onClick={onPlayPause}>
      {playing ? 'Pause' : 'Play'}
    </button>
  );
}

export default CustomControls;