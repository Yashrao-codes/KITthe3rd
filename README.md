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
- Frontend: React.js
- Backend: Node.js with Express
- Database: SQLite (with Sequelize ORM)
- AI/ML: TBD (integration pending)
- Authentication: Google Auth (integration pending)

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
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── SavedArticles.js
│   │   │   └── Recommendations.js
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── server.js
│   ├── package.json
│   └── database.sqlite
└── README.md


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
- Basic UI for saving articles via URL
- Backend API for saving and retrieving articles
- Simple content extraction from saved URLs

## Pending Features
- AI-powered content labeling
- User authentication (Google Auth)
- AI-driven article recommendations
- Tweet-sized insight generation
- Progressive Web App implementation

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Next Steps
1. Implement user authentication using Google Auth
2. Integrate an AI service for content labeling and recommendations
3. Develop the recommendation algorithm
4. Create the tweet-sized insight generation feature
5. Implement Progressive Web App functionality
6. Enhance error handling and input validation
7. Improve the UI/UX design

## Notes for AI Coding Assistants
- The current implementation uses a basic SQLite database. Future iterations may require migration to a more robust database solution.
- AI/ML integration is pending. The system should be designed to easily incorporate AI services for content analysis, labeling, and recommendations.
- The frontend is built with React and Material-UI. Any UI enhancements should maintain consistency with this design system.
- Error handling and input validation need significant improvement throughout the application.
- The backend API may need to be expanded to support future features like user management and AI-driven functionalities.

## License
This project is licensed under the CC0.
