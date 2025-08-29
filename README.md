# Codenopsis 🚀

A comprehensive online coding platform that combines problem-solving, AI-powered assistance, and video tutorials to enhance the learning experience for developers.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Codenopsis is a full-stack web application that provides a complete coding learning environment. It features an interactive code editor, real-time code execution, AI-powered doubt resolution, video tutorials, and comprehensive problem management for both users and administrators.

## ✨ Features

### For Users
- **Interactive Code Editor**: Monaco Editor with syntax highlighting for C++, Java, and JavaScript
- **Real-time Code Execution**: Submit and test code against multiple test cases
- **Problem Solving**: Access to a curated collection of coding problems with varying difficulty levels
- **AI Chat Assistant**: Get instant help and explanations using Google's Generative AI
- **Video Tutorials**: Watch solution videos for better understanding
- **Submission History**: Track your progress and view past submissions
- **User Authentication**: Secure login/signup with JWT tokens

### For Administrators
- **Problem Management**: Create, edit, and delete coding problems
- **Test Case Management**: Add visible and hidden test cases
- **Video Content Management**: Upload and manage solution videos
- **User Management**: Monitor user activities and submissions
- **Content Moderation**: Control problem visibility and difficulty

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Caching**: Redis
- **Authentication**: JWT with bcrypt
- **Code Execution**: Judge0 API (RapidAPI)
- **AI Integration**: Google Generative AI
- **File Storage**: Cloudinary
- **Validation**: Joi/Validator.js

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + DaisyUI
- **Code Editor**: Monaco Editor
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 📁 Project Structure

```
Codenopsis/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── redis.js       # Redis configuration
│   │   ├── controllers/
│   │   │   ├── solveDoubt.js  # AI chat controller
│   │   │   ├── userAuthent.js # Authentication controller
│   │   │   ├── userProblem.js # Problem management
│   │   │   ├── userSubmission.js # Submission handling
│   │   │   └── videoSection.js # Video management
│   │   ├── middleware/
│   │   │   ├── adminMiddleware.js # Admin route protection
│   │   │   └── userMiddleware.js  # User authentication
│   │   ├── models/
│   │   │   ├── problem.js     # Problem schema
│   │   │   ├── solutionVideo.js # Video schema
│   │   │   ├── submission.js  # Submission schema
│   │   │   └── user.js        # User schema
│   │   ├── routes/
│   │   │   ├── aiChatting.js  # AI chat routes
│   │   │   ├── problemCreator.js # Problem CRUD routes
│   │   │   ├── submit.js      # Code submission routes
│   │   │   ├── userAuth.js    # Authentication routes
│   │   │   └── videoCreator.js # Video management routes
│   │   ├── utils/
│   │   │   ├── problemUtility.js # Code execution utilities
│   │   │   └── validator.js   # Input validation
│   │   └── index.js           # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminDelete.jsx    # Admin problem deletion
│   │   │   ├── AdminPanel.jsx     # Admin problem creation
│   │   │   ├── AdminUpload.jsx    # Admin file upload
│   │   │   ├── AdminVideo.jsx     # Admin video management
│   │   │   ├── ChatAi.jsx         # AI chat interface
│   │   │   ├── Editorial.jsx      # Problem editorial
│   │   │   └── SubmissionHistory.jsx # Submission tracking
│   │   ├── pages/
│   │   │   ├── Admin.jsx          # Admin dashboard
│   │   │   ├── Homepage.jsx       # Main user dashboard
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── ProblemPage.jsx    # Individual problem page
│   │   │   └── Signup.jsx         # Registration page
│   │   ├── store/
│   │   │   └── store.js           # Redux store configuration
│   │   ├── utils/
│   │   │   └── axiosClient.js     # HTTP client configuration
│   │   ├── authSlice.js           # Redux auth slice
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # App entry point
│   └── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Redis
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd Codenopsis/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=your_redis_connection_string
JWT_SECRET=your_jwt_secret_key
JUDGE0_KEY=your_judge0_api_key
GOOGLE_AI_KEY=your_google_ai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Codenopsis/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔧 Environment Variables

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/codenopsis` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-secret-key-here` |
| `JUDGE0_KEY` | Judge0 API key from RapidAPI | `your-judge0-api-key` |
| `GOOGLE_AI_KEY` | Google Generative AI API key | `your-google-ai-key` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `your-cloudinary-key` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your-cloudinary-secret` |

## 📖 Usage

### For Users

1. **Registration/Login**: Create an account or log in to access the platform
2. **Browse Problems**: View available coding problems with different difficulty levels
3. **Solve Problems**: Use the integrated code editor to write and test your solutions
4. **Get AI Help**: Use the AI chat feature to get instant assistance
5. **Watch Tutorials**: Access video solutions for better understanding
6. **Track Progress**: Monitor your submission history and performance

### For Administrators

1. **Access Admin Panel**: Log in with admin credentials
2. **Create Problems**: Add new coding problems with test cases
3. **Manage Content**: Edit existing problems and manage video content
4. **Monitor Users**: Track user activities and submissions
5. **Upload Videos**: Add solution videos for problems

## 🔌 API Endpoints

### Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `POST /user/logout` - User logout
- `GET /user/profile` - Get user profile

### Problems
- `GET /problem` - Get all problems
- `GET /problem/:id` - Get specific problem
- `POST /problem` - Create new problem (Admin only)
- `PUT /problem/:id` - Update problem (Admin only)
- `DELETE /problem/:id` - Delete problem (Admin only)

### Submissions
- `POST /submission` - Submit code solution
- `GET /submission/history` - Get submission history

### AI Chat
- `POST /ai/chat` - Send message to AI assistant

### Videos
- `GET /video` - Get all videos
- `POST /video` - Upload video (Admin only)
- `DELETE /video/:id` - Delete video (Admin only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Judge0](https://judge0.com/) for code execution API
- [Google Generative AI](https://ai.google.dev/) for AI chat functionality
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for UI components

---

**Happy Coding! 🎉**
