# Missing Puzzle Piece

This project involved creating a missing puzzle piece application, adhering to a created design. The primary technologies leveraged for this project were ReactJS, JavaScript, TailwindCSS, and Vite. The concept, design, user interface, and code were solely created by Laura Vollmer.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

The project's scope involved developing a missing puzzle piece application using ReactJS, Tailwind CSS, JavaScript, and Vite. Additionally, I worked on using various features to help build out this application to include a frontend and backend server.

### The challenge

This application was developed as a personal project to address a common issue faced by puzzle enthusiasts - the loss of puzzle pieces. When a piece goes missing, it's challenging to create a DIY replacement or order a new one from the manufacturer. As a result, the only viable option is to search for the lost piece. The absence of one or more pieces significantly reduces a puzzle's value. Therefore, I aimed to create a responsive application that offers an optimal layout across various device screen sizes, assisting users in their search for missing puzzle pieces. Consequently, this will lead to an increase in satisfied puzzle enthusiasts, facilitate the appropriate resale of puzzles, and reduce the number of puzzles discarded.

### Screenshot

Website Screenshot:
![Laura's Home Page]()

Brand Section Website Screenshot:
![Laura's Question Page]()

Client Testimonials Website Screenshot:
![Laura's Result Page]()

Footer Website Screenshot:
![Laura's Footer]()

Project Design Requested:
![Project Wireframe]()

### Links

- Github Repo URL: [Missing Puzzle Piece Github Repo](https://github.com/lavollmer/missingpuzzlepiece)
- Live Site URL: [Missing Puzzle Piece](https://missing-puzzle-piece-b568b18a56c7.herokuapp.com/)

## My process

My process for building this website involved planning, building and refractoring code. This project took me about 2-4 weeks ad hoc to complete start to finish.

Project planning:
1. I began by writing my thoughts surrounding the problem at hand. I went through different strategies when a puzzle piece goes missing as well as market research. I realized that many missing pieces are hard to replace or replicate and; therefore, finding the puzzle piece is the best option for many. 
2. After market research, I started by writing up my project plan with a mockup drawing of what I wanted the project to look like as well as how I would make it user-friendly. My goal was to have a high rating on Lighthouse report, user friendly website and solve the problem.
3. I began working on the application by creating a Github Repo. I decided my tech stack would involve Vite, Tailwind CSS, React and Heroku. I started by making sure everything was correctly working together and setup properly. 
4. First, I started by using my mockup drawing to determine how many components I would need and organization. I wanted to be able to use reusable components in my project to decrease tech debt and work. I started with creating Question, Result Page and End Page components. I wanted the basic functionality of the application to work before starting on the UI and design.
5. Routing would be become an important part of the application as I wanted it to be a smooth and directed experience for the end user. I used react-router-dom for my navigation between pages. Additionally, I learned about the navigation hook and how it worked properly between all the pages.
6. Aftwards, I created reusable FOUND and NO buttons for each question. These buttons were an important aspect of the coding as I wanted it to direct the user to look for the puzzle piece as that was the best bet to finding the puzzle piece. The FOUND button would direct the end user to Result Page where it would say "Congrats!" along with how many puzzles have been saved by the application. The NO button would direct the user to the next question until hopefully the user would find the puzzle piece. 
7. I decided to work on the Question component with using code to show an array of 19 questions to the end user. The content of the questions would be edited over the series of weeks of build to determine which questions to be shown the the user first (where the missing puzzle piece would most likely be found).
8. If the user was unable to find the puzzle piece from the series of location questions then the application would direct the user to contacting the manufacturer or making a puzzle piece. These were last solutions, but necessary to not let the end user not be able to solve the issue of the missing puzzle piece.


### Built with

- Semantic HTML5 markup
- JavaScript
- Tailwind CSS
- ReactJS
- Vite
- CSS custom properties
- Mobile-first workflow
- Google Fonts
- Express.js
- Node.js
- POSTMAN
- Heroku
- Icon Logo


### What I learned

Throughout the development of this project, I gained a deeper understanding of several important concepts and tools. Here are the key learnings:

1. **Tailwind CSS Setup:** The config file has updated terminology - `purge` is now `content`. Also, `app.css` should have the Tailwind CSS utilities. At the beginning of the project, I spent some time reconfiguring the section in order to work.
2. **React useState Hook:** I learned the importance of correctly declaring the state variable and the function to update it inside an array using `useState`. I gained a deeper understanding of this concept throughout the navigation bar coding.
4. **React Router Dom:** Gained a deeper understanding of `react-router-dom` and how it works within all the files. It is a library for routing in React applications. It allows to create multiple routes in the application and render different components. I am able to create SPAs while not navigating through multiple pages and refreshing.

### Continued development

Throughout this project, I learned a lot about Tailwind CSS, styling and how all the applications work together. I very much enjoyed creating an application from nothing. I will continue learning through freeCodeCamp, Frontend Mentor challenges and self-application.

## Author

- Website - [Laura Vollmer](https://lauradeveloper.com/)
- Github Profile - [@lavollmer](https://github.com/lavollmer)
- Heroku - [Heroku Deployed Application] (https://missing-puzzle-piece-b568b18a56c7.herokuapp.com/)

## Acknowledgments

None