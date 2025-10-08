🎬 MERN Movie Review and Recommendation App

A Movie Review and Recommendation Application built using the MERN stack — MongoDB, Express.js, React, and Node.js.
This app allows users to browse movies, post reviews, and get personalized recommendations.
Admins can manage movie and artist data through a dedicated dashboard.

🚀 Features

- User Registration & Authentication (JWT-based)
- Role-Based Access Control (Admin & Regular Users)
- Movie Listings with Details
- User Reviews & Ratings
- Movie Recommendations
- Admin Dashboard for movie and artist management
- RESTful API for seamless data access
- Cloudinary Integration for image uploads

🧰 Technologies Used
Frontend: React, Ant Design (Antd), Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
HTTP Client: Axios
Image Storage: Cloudinary

⚙️ Prerequisites

- Node.js (v16 or higher recommended)
- npm
- MongoDB

🛠️ Installation & Setup

1. Clone the Repository:
   git clone https://github.com/SevenSquare-Tech/movie-review-website.git

2. Navigate to Project Directory:
   cd movie-review-website

3. Install Server Dependencies:
   cd server
   npm install

4. Install Client Dependencies:
   cd ../client
   npm install

🔑 Configuration
Create a .env file in the server directory with:
PORT=3001
MONGODB_URI=mongodb://localhost/movie-review-website
SECRET_KEY="MOVIE@REVIEW"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

▶️ Running the Application

1. Start the Backend Server:
   cd server
   node server.js

2. Start the Frontend (Vite):
   cd ../client
   npm run dev

🧑‍💻 Admin Access

- Visit: http://localhost:3000/admin
- Log in with admin credentials

🏗️ Project Structure
movie-review-website/
├── client/
├── server/
└── README.md

💡 Future Enhancements

- Advanced Recommendation Engine
- Real-time Review Updates (WebSockets)
- Movie Search and Filter by Genre
- Progressive Web App (PWA) support

🧾 License
This project is licensed under the MIT License.
