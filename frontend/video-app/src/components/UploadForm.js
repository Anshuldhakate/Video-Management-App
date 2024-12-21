import axios from 'axios';
import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a video file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);
    formData.append('video', file);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('https://video-app-backend-2tsp.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Include the token in the correct format
        },
      });
      console.log('Upload Successful:', response.data);
      setSuccessMessage('Video uploaded successfully!');
      setTitle('');
      setDescription('');
      setTags('');
      setFile(null);
    } catch (err) {
      console.error('Upload Error:', err.response || err.message);
      setError('Failed to upload the video. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Tags (comma-separated)</label>
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />

      <label>Video File</label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} accept="video/*" required />

      <button type="submit">Upload</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};

export default UploadForm;
