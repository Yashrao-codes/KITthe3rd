# KITthe3rd: AI-Powered Article Management System

## Product Overview
KITthe3rd is an AI-powered article management system designed to help users efficiently save, organize, and gain insights from online articles. The application allows users to save articles via URL, automatically extracts and labels content, and provides AI-driven recommendations based on reading patterns.

## Objectives
1. Develop a user-friendly interface for saving and managing articles
2. Implement automatic content extraction and labeling using AI
3. Create an AI-driven recommendation system for personalized reading suggestions
4. Provide a feature for generating tweet-sized insights from saved articles
5. Ensure cross-platform compatibility through a progressive web app design

## Tech Stack
- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: SQLite (with Sequelize ORM)
- Authentication: JWT (JSON Web Tokens)
- AI/ML: TBD (integration pending)

## Requirements
- Node.js (v14 or later)
- npm (v6 or later)
- Git

## Repository Structure
KITthe3rd/
├── my-article-app/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.js
│   │   ├── contexts/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── SavedArticles.js
│   │   │   ├── Recommendations.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── models/
│   │   ├── user.js
│   │   └── article.js
│   ├── config.js
│   ├── server.js
│   ├── package.json
│   └── database.sqlite
└── README.txt

## Setup and Installation
1. Clone the repository:
   git clone https://github.com/Yashrao-codes/KITthe3rd.git
   cd KITthe3rd

2. Set up the backend:
   cd my-article-app/backend
   npm install

3. Set up the frontend:
   cd ../
   npm install

4. Start the backend server:
   cd backend
   npm start

5. In a new terminal, start the frontend development server:
   cd my-article-app
   npm start

6. Open your web browser and navigate to http://localhost:3000

## Current Features
- User registration and login with device-based session authentication
- Basic UI for saving articles via URL
- Backend API for saving and retrieving articles
- Simple content extraction from saved URLs
- Protected routes for authenticated users

## Pending Features
- AI-powered content labeling
- AI-driven article recommendations
- Tweet-sized insight generation
- Progressive Web App implementation
- Enhanced error handling and input validation

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Next Steps
1. Implement AI service for content labeling and recommendations
2. Develop the recommendation algorithm
3. Create the tweet-sized insight generation feature
4. Implement Progressive Web App functionality
5. Enhance error handling and input validation
6. Improve the UI/UX design
7. Add user profile management features

## Notes for AI Coding Assistants
- The current implementation uses a basic SQLite database. Future iterations may require migration to a more robust database solution.
- AI/ML integration is pending. The system should be designed to easily incorporate AI services for content analysis, labeling, and recommendations.
- The frontend is built with React and Material-UI. Any UI enhancements should maintain consistency with this design system.
- Authentication is implemented using JWT with device-based sessions. This may need to be expanded or modified for more advanced authentication needs.
- The backend API may need to be expanded to support future features like user management and AI-driven functionalities.

## License
This project is licensed under the MIT License.
