// VideoPlayer.js
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CustomControls from './CustomControls';

function VideoPlayer({ videoId }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyCmOTxisNroUo6FUUd0MGOUqM-gfrPxz9o&part=snippet,contentDetails,statistics,status`)
      .then(response => response.json())
      .then(data => {
        const videoData = data.items[0];
        setVideoUrl(`https://www.youtube.com/watch?v=${videoData.id}`);
      });
  }, [videoId]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <ReactPlayer url={videoUrl} playing={playing} />
      <CustomControls playing={playing} onPlayPause={handlePlayPause} />
    </div>
  );
}

export default VideoPlayer;