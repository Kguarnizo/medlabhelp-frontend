# MedLab Help Backend
As every patient knows, medical jargon can be confusing for even the most routine of tests. That's why we created MedLab Help. We wanted a user-friendly guide to help you understand lab tests and give you the knowledge to allow you to be proactive in your healthcare by explaining why a test may be ordered by your doctor and what the normal range of reference for your results should be.

## Project Requirements
`{
  "name": "medlab",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "axios": "^1.4.0",
    "bootstrap": "5.3.1",
    "package.json": "^2.0.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
  "engines": {
    "node": "20.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`


## Project Setup
1. Clone the forked repo. Do not clone this inside of another project folder, because that will cause issues.
2. Create a new React app within this project folder. You must perform this within this front-end project folder.
3. Run `yarn create react-app my-app --template typescript`
4. Install axios by running `$ yarn add axios`
5. Create a file named `.env` with the following insde `REACT_APP_BACKEND_URL=http://localhost:5000`
6. Commit and push your files to your repo, especially including the package.json file!
7. Run `$ yarn start` to open the React project in your browser.