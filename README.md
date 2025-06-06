﻿# gdrive-mb-juhilkoshiya-challenge-full-stack
# Google Drive Risk Report Application

This is a Google Drive Risk Report web application that allows users to connect to their Google Drive, retrieve and analyze data about file types, file sizes, storage usage, and display links to files and risk counters. The application is built using React for the frontend and Node.js for the backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Features

- Connect to Google Drive and retrieve file data
- Analyze file types, sizes, and sharing status
- Display risk counters and links to files
- Calculate and display a risk score based on file sharing and other criteria

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- Material UI
- Axios

### Backend
- Node.js
- Express
- MongoDB (using Mongoose)
- Google Drive API

## Installation

### Prerequisites
- Node.js
- npm (or yarn)
- MongoDB instance (local or MongoDB Atlas)

### Clone the Repository
```bash
git clone https://github.com/koshiya-juhil/gdrive-mb-juhilkoshiya-challenge-full-stack.git
cd gdrive-mb-juhilkoshiya-challenge-full-stack
```
### Running the Application
```
cd frontend
npm install
npm run dev
```

```
cd server
npm install
npm start
```
### Setting environment variable

Frontend .env
```
VITE_SERVER_MODE='dev'
VITE_DEV_SERVER_URL='http://localhost:8000'
VITE_DEV_URL='http://localhost:3000'
VITE_PROD_SERVER_URL=''
VITE_PROD_URL=''
```

Server .env
```
MODE=dev
PORT=8000
MONGO_URL="mongodb://localhost:27017/metomic"
MONGODB_PROD_URL=""
CLIENT_ID="enter_your_google_client_key"
CLIENT_SECRET="enter_your_google_secret_key"
ORIGIN_DEV='http://localhost:3000'
ORIGIN_PROD=''
```
