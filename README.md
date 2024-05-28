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

Project management:
1. The project began with an in-depth analysis of the problem at hand, exploring various strategies for handling missing puzzle pieces and conducting market research. It became evident that replacing or replicating missing pieces is often challenging, making the discovery of the original piece the most viable solution for many.
2. Post-market research, a comprehensive project plan was drafted, including a mockup of the desired project outcome and strategies for user-friendliness. The objective was to achieve a high Lighthouse report rating, create a user-friendly website, and effectively address the problem.
3. The application development began with the creation of a Github Repository. The chosen tech stack comprised Vite, Tailwind CSS, React, and Heroku. Initial efforts were focused on ensuring seamless integration and proper setup.
4. The mockup drawing was used as a blueprint to determine the required components and their organization. The aim was to utilize reusable components to minimize technical debt and workload. Initial components created included Question, Result Page, and End Page, prioritizing basic functionality before UI and design.
5. Routing was identified as a crucial aspect of the application to ensure a smooth and directed user experience. React-router-dom was employed for navigation between pages, and the navigation hook was utilized to ensure seamless transitions.
6. Subsequently, reusable FOUND and NO buttons were created for each question. These buttons guide the user in their search for the missing puzzle piece. The FOUND button redirects users to the Result Page, displaying a congratulatory message and the number of puzzles saved by the application. The NO button leads the user to the next question, aiding in the search for the missing piece.
7. The Question component was developed to present an array of 19 questions to the user. The content of these questions was refined over several weeks to prioritize the most likely locations of the missing puzzle piece.
8. The next step was to direct the user after the questions. If the user fails to find the puzzle piece through the location questions, the application directs them to contact the manufacturer or create a puzzle piece. These fallback solutions ensure that users are not left without options.
9. After determining I wanted a manufacturer component. I created the manufacturer page which lists the most popular USA puzzle makers, providing links to their respective contact pages for puzzle piece replacement. Although not all puzzle makers offer replacement services, users can decide whether to pursue this option or explore others. I wanted users to feel in control of their solutions to fixing the missing puzzle piece.
10. Next, the Making a Puzzle Piece section was also incorporated, providing users with instructions to create their own puzzle piece if desired.
11. Throughout the development process, various debugging and error resolution tasks were undertaken. Simultaneously, the application's styling was enhanced with contrasting colors, legible text, and vibrant buttons to facilitate seamless user navigation.
12. To further improve the application, a feedback submission feature was implemented. This feature, although challenging to set up, is crucial for gathering user insights to enhance the application. It involved setting up a backend server, using POSTMAN, testing the feedback form, and designing user-friendly prompts for feedback.
13. Next, a footer was added to the application, displaying a feedback link, developer information, and copyright year on all pages.
14. To ensure users have access to all necessary information, a FAQ page was created with a link on the home page, emphasizing that the application is free and still under development.
15. An information component was added before the location questions to enhance navigability and provide clear instructions.
16. Navigation between pages and sections was prioritized for an optimal user experience. Mobile responsiveness was also incorporated, with a mobile navigation sidebar for easy navigation between sections.
17. A modal pop-up was included to appear every time the application loads, informing users that the application is still under development and being refined.
18. The final phase of the project involved user testing, where several individuals were asked to use the application and provide feedback for improvement. A comprehensive README was also created for technical documentation, providing insights into the project's inception and evolution.

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

Modal Basic Code - https://flowbite.com/docs/components/modal/