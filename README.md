# Video Management App

A video management web application built with React for the frontend and Express for the backend, using MongoDB to store video metadata. The app allows users to upload and manage videos securely with JWT-based authentication.

## Deployed Link- 
https://storied-wisp-429163.netlify.app/


<img width="958" alt="Screenshot 2024-12-21 170511" src="https://github.com/user-attachments/assets/6b2b288b-5648-4581-9ed0-88cf56c94d80" />



## Features
- Video Upload: Allows users to upload video files with a title, description, and tags.
- Video Listing: Displays the list of videos uploaded by the logged-in user.
- Authentication: Secure login and token-based authentication using JSON Web Tokens (JWT).
- Video Management: Upload and view videos with relevant metadata.

## Tech Stack
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, MongoDB, Multer (for file uploads)
- **Authentication**: JSON Web Token (JWT)
- **Storage**: LocalStorage for storing the JWT token

## Requirements

### Backend:
- Node.js
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- .env file for environment variables

### Frontend:
- React (create-react-app)
- Axios

## Installation

### 1. Clone the Repository
Clone the repository to your local machine.

```bash
git clone https://github.com/Anshuldhakate/video-management-app.git
cd video-management-app
