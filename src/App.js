import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  const [videoId, setVideoId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setVideoId(event.target.elements.videoId.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="videoId" type="text" placeholder="Enter YouTube Video ID" />
        <button type="submit">Play Video</button>
      </form>
      {videoId && <VideoPlayer videoId={videoId} />}
    </div>
  );
}

export default App;