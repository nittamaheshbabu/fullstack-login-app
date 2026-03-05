# Fullstack Login Application

## Project Description
This is a Fullstack Login Application built using React for frontend, Node.js and Express for backend, and MongoDB as the database.

Users can:
- Register
- Login
- View welcome page after login

## Technologies Used

Frontend
- React
- CSS
- Axios

Backend
- Node.js
- Express.js

Database
- MongoDB Atlas
- Mongoose

## Project Structure

fullstack-login-app
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Welcome.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json

## Installation

### Backend

```bash
cd backend
npm install
npm start
