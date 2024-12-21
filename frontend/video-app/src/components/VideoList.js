import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoList.css';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Ensure token name consistency
    axios
      .get('http://localhost:5000/videos', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setVideos(res.data))
      .catch((err) => {
        console.error('Error fetching videos:', err);
        // Handle unauthorized error (e.g., token expired)
      });
  }, []);

  return (
    <div>
      <h2>Uploaded Videos</h2>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Tags: {video.tags.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No videos uploaded yet.</p>
      )}
    </div>
  );
}

export default VideoList;
