# X Clone (Twitter Clone) Project

## Description
This is a full-stack clone of X (formerly Twitter) built using the MERN stack: MongoDB, Express.js, React.js, and Node.js. The project replicates core social media features such as user authentication, posting tweets, following users, and real-time interactions. It uses Tailwind CSS for styling, React Query for state management, and Cloudinary for image uploads.

## Demo
*Currently no live demo due to trademark restrictions on deployment platforms.*

## Features
- User registration and login (includes Google OAuth)
- Profile management (update name, bio, profile, and cover photos)
- Follow/unfollow other users to customize feed
- Create, like, comment, and retweet posts (tweets)
- Real-time notifications and direct messaging (optional)
- Search users and tweets
- Responsive UI built with Tailwind CSS
- Efficient client state handling with React Query
- Image upload support via Cloudinary

## Technologies Used
- Frontend: React, React Router, React Query, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT and Google OAuth
- Cloudinary for media hosting
- Development tools: Nodemon, Concurrently

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB database or Atlas connection
- Cloudinary account (for image uploads)
- Google OAuth credentials (optional)

### Installation

Clone the repository:

```
git clone https://github.com/rsdevian/X-Clone
```

1. Backend setup:
```
cd server
npm install
node server.js
```

2. Frontend setup:
```
cd client
npm install
npm run dev
```
