# Missing Puzzle Piece

This project involved creating a missing puzzle piece application, adhering to a created design. The primary technologies leveraged for this project were ReactJS, JavaScript, TailwindCSS, and Vite.

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

The project's scope involved developing a missing puzzle piece application using ReactJS, Tailwind CSS, JavaScript, and Vite. 

### The challenge

This application was developed as a personal project to address a common issue faced by puzzle enthusiasts - the loss of puzzle pieces. When a piece goes missing, it's challenging to create a DIY replacement or order a new one from the manufacturer. As a result, the only viable option is to search for the lost piece. The absence of one or more pieces significantly reduces a puzzle's value. Therefore, I aimed to create a responsive application that offers an optimal layout across various device screen sizes, assisting users in their search for missing puzzle pieces.

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
- Live Site URL: [Missing Puzzle Piece]()

## My process

My process for building this website involved planning, building and refractoring code. This project took me about 2-4 business days to complete start to finish.

Project planning:
1. I began by writing my thoughts surrounding the problem at hand on Substack. Based on this I decided what was the best way to approach this project to be the most efficient.
2. I created Github Repo and connected to my localhost/terminal. I did my first commit to make sure that everything was connected.
3. Installed ReactJS, TailwindCSS, and Vite.
4. Ran on localhost to determine everything was functioning correctly. Clean up code given from React to have a clean slate for building. 
5. Downloaded all the images in the assets folder - separated icons, images for desktop and images for mobile in folders in assets.
6. Planned build - Planned out reusable pieces of content.
7. Wrote out all my components and named them logically. Created my App.js and imported all the components to make sure the page would run smoothly.
8. Worked on the Icon Sunnyside Logo component to have the icon available for reuse in header and footer.
9. Worked on navigation bar. Started by working on useState hook for the mobile menu. I had to add react-router-dom to my main.jsx page to allow all the child components of App to have access to the routing context.
10. Worked on the splash page (main landing page) - Learned the spacing of the words and arrow image to have it land on the orange image as the design was shown.
11. Worked on 2 content sections - brand and audience components. 
12. Created grid container for content and 2 images on App.jsx to fill whole page.
13. Deleted LearnMore component - I realized it was easier to style and import everything into each component separately than have another component.
14. Added 2 more images to App.jsx for cherry and orange with the text overlayed based on design given.
15. Started working on client testimonials section. Added inline custom styling to the words Client Testimonials.
15. Added four images to bottom of page using grid container which quick to do.
16. worked on Footer component which included reusable Clickables component, the icon and the social media links.
17. After finishing the desktop, I started working on stylizing mobile responsive piece of the application. This took some rearranging and adding specifications for sizing for medium size screens and above.
18. I imported Google Fonts from design package given and imported into Tailwind CSS. After this, I updated all fonts within each component to match the design.
20. The final day, I worked on cleaning up mobile responsiveness and small design tweaks such as the Learn More link on mobile being centered.
21. Wrote my README and deployed to Netlify.
22. Reread my README and project to review. Everything looks good!

### Built with

- Semantic HTML5 markup
- JavaScript
- Tailwind CSS
- ReactJS
- Vite
- CSS custom properties
- Mobile-first workflow


### What I learned

Throughout the development of this project, I gained a deeper understanding of several important concepts and tools. Here are the key learnings:

1. **Tailwind CSS Setup:** The config file has updated terminology - `purge` is now `content`. Also, `app.css` should have the Tailwind CSS utilities. At the beginning of the project, I spent some time reconfiguring the section in order to work.
2. **React useState Hook:** I learned the importance of correctly declaring the state variable and the function to update it inside an array using `useState`. I gained a deeper understanding of this concept throughout the navigation bar coding.
4. **React Router Dom:** Gained a deeper understanding of `react-router-dom` and how it works within all the files. It is a library for routing in React applications. It allows to create multiple routes in the application and render different components. I am able to create SPAs while not navigating through multiple pages and refreshing.

Tailwind Config File
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontWeight: {
        600: "600",
        700: "700",
        900: "900",
      },

```

### Continued development

Throughout this project, I learned a lot about Tailwind CSS, styling and how all the applications work together. I will continue learning through freeCodeCamp, Frontend Mentor challenges and self-application.

## Author

- Website - [Laura Vollmer](https://lauradeveloper.com/)
- Github Profile - [@lavollmer](https://github.com/lavollmer)

## Acknowledgments

None