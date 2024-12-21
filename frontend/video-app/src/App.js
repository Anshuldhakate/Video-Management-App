import React from 'react';
import VideoList from './components/VideoList';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <h1>Video Management App</h1>
      <UploadForm />
      <VideoList />
    </div>
  );
}

export default App;
