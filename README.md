## General Guidelines
The application might be slow for some people because free services are used to deploy the project. Backend is deployed on render and frontend is deployed on vercel. Also the project uses some external APIs for avatar. So keep patience and have fun.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#usefulLinks">Useful Links</a></li>
    <li><a href="#folderStructure">Folder Structure</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This is Chat Application website. Here you can chat with one another in real time. It has cool list of avatars that you can set to your profile and also emojis by which you can chat.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. Make sure you have Nodejs installed.
2. MongoDB is good to have but not mandatory.
3. git bash if you are on windows.

### Installation
1. Clone the repo `git clone`
2. Goto public directory and type `npm install`
3. In the same directory run `npm start`
4. Goto server directory and type `npm install`
5. In the same directory run `npm start`
6. Make sure you set environment variables where ever needed.

<!-- CONTACT -->
## Contact

Mohammad Arsalan - [@_Arsalaan_](https://mobile.twitter.com/_arsalaan_)

Email: arsalanmohd237@gmail.com

[LinkedIn](https://www.linkedin.com/in/mohammadarsalan/)

<!-- Useful Links -->
## Useful Links

API is deployed here: https://chat-app-api-kxhg.onrender.com

Complete application is deployed here: https://chat-app-1-to-1.vercel.app/

<!-- Folder Structure -->
## Folder Structure

`
|   .gitignore
|   README.md
|
+---public
|   |   .gitignore
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |
|   +---public
|   |       favicon.ico
|   |       index.html
|   |       logo192.png
|   |       logo512.png
|   |       manifest.json
|   |       robots.txt
|   |
|   \---src
|       |   App.css
|       |   App.js
|       |   App.test.js
|       |   index.css
|       |   index.js
|       |   logo.svg
|       |   reportWebVitals.js
|       |   setupTests.js
|       |
|       +---assets
|       |       loader.gif
|       |       logo.svg
|       |       robot.gif
|       |
|       +---components
|       |       ChatContainer.jsx
|       |       ChatInput.jsx
|       |       Contacts.jsx
|       |       Logout.jsx
|       |       Messages.jsx
|       |       Welcome.jsx
|       |
|       +---pages
|       |       Chat.jsx
|       |       Login.jsx
|       |       Register.jsx
|       |       SetAvatar.jsx
|       |
|       \---utils
|               APIRoutes.js
|
\---server
    |   .env
    |   index.js
    |   package-lock.json
    |   package.json
    |
    +---controllers
    |       messagesController.js
    |       usersController.js
    |
    +---model
    |       messageModel.js
    |       userModel.js
    |
    \---routes
            messagesRoute.js
            userRoutes.js
`