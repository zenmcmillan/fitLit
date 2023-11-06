# Fit Lit Part 1 - Joey, Zen, Lex

## Abstract:

FitLit is a project that focuses on building an intuitive dashboard for activity tracking, inspired by fitness apps like Fitbit. It aims to use object and array prototype methods for data manipulation, create a user-friendly interface, write reusable code, and implement a comprehensive testing suite. The project involves processing data from activity trackers for multiple users over various days, presenting it in a clear and informative manner.

Web development tools, including Webpack, are used to streamline the project. It's vital to configure Webpack to locate files correctly and utilize import/export syntax for modular code. The project's requirements include using the FitLit Starter Kit repository and setting up testing with mocha and chai.

FitLit consists of multiple iterations, focusing on different aspects of data processing and dashboard display, including user data, hydration, sleep, and activity. It encourages fetching data from provided endpoints instead of hardcoded data files. While third-party libraries like Day.js or Chart.js are optional, instructor approval is advised.

The project also provides an extension option for building a robust testing suite, ensuring the project's quality and functionality. In summary, FitLit aims to deliver a user-friendly fitness dashboard for tracking activity data, fostering collaboration and professionalism among team members.


## Application link:

[Fit Lit GitHub Repository](https://github.com/zenmcmillan/fitLit)

## Installation Instructions:
1. Click the green < code > button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Start the webpack by typong npm start into the terminal
9. Copy the link it provides that will look like this: http://localhost:8080/
10. Paste that into your web browser of choice
11. Enjoy!

## Preview of App:

![Fit Lit](https://github.com/zenmcmillan/fitLit/assets/140363136/6e642d4f-80ad-4aa4-8477-529eca29580c)


## Context:
This was the first group project in Mod 2 that we had to assemble. We used webpacks as well as fetch requests to store variables for future use and that allowed us to populate every field of this Fitness Tracker. We had 10 days to complete the project spent about 90 hours cumulatively working togeher collaboratively. Part of the difficulty of the project came from learning new concepts such as the fetch requests and then having to utilize them in the same day. Even in spite of this, the project was completed several days in advance of the project deadline allowing time for bug fixes. 

## Contributors:

Zen McMillan - https://github.com/zenmcmillan  
Joey Stewart - https://github.com/JoeyStewart 
Lex Hastings - https://github.com/Jesuitman 

## Learning Goals:

* Use object and array prototype methods to perform data manipulation.

* Create a user interface that is easy to use and displays information in a clear way.

* Write DRY, reusable code that follows SRP and trends toward function purity
* Implement a robust testing suite using TDD.

* Make network requests to retrieve data.

* Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

## Major Wins:
### Joey:
I was able to create a skeleton for our webpage with the use of html and css. These had been my weaker areas in previous projects, but I feel that I have vastly improved on my methods in the construction phase. I have also been able to move away from using divs. Using them more sparingly. Learning how to quickly do fetch requests with my group was enlightening and I feel I can do them with speed and few issues going forward.

### Zen: 

A major win for me was the ability to understand the problem at hand and use iterator methods and my pseudocoding skills to solve the problems at hand. I am repeating Mod 2 and the first time around I couldn't understand how to solve the questions. So it was great that this time around my knowledge of iterator methods helped me so much in solving these problems.

### Lex:
A major win I had was when i figured out how to link all of the data together after initially using data stored in the initial project. Finding out that we didnt need to adapt our functions too much and we could just format the fetch request to allow for easy transition was a massive wave of relief. It was nice being able to adapt our functions that we built prior for use in other areas too, such as with the sleep data and the hydration data functions for the week, it was easy to adapt them which was very nice.

## Challenges and How We Overcame Them:
### Joey:
Understanding how to manipulate the DOM and use it effectively was a challenge. Balancing out how to import which functions to their needed folders left me confused during the earlier stages of the project. Once we had figured out a path in connecting our functions to the DOM, things became much smoother and easier for the rest of the project.

### Zen: 

Working with asynchronous javascript and network requests was a challenge. I couldn't understand why we kept getting errors when the data was fetched correctly and I could see it in the console. I learned how to use promise.all when I'm working with multiple fetch requests.

### Lex:
Learning how to use the DOM again after not having worked with it for a few weeks was the main challenge in the project. I felt very stumped because I hadnt worked with it much. Once it finally clicked it was nice to see my data actually appear on screen but it took a lot of collaborative and efficient struggle. 


# ========== FitLit PART 2 ==========

## Abstract:

In part 2 we worked together to add in post requests and a motivation tracker. we also added in a form that can be filled out to populate new information in the Of course! Here's your project README in a paragraph format:

In Iteration 6, we address feedback from Part 1 of the project, ensuring that any uncertainties about the feedback are clarified with our instructor. We also focus on code refactoring, aiming to eliminate redundancy and improve the overall codebase's maintainability.

Moving on to Iteration 7, our main objective is to empower users to add new activity data directly from the dashboard. To achieve this, we transition from relying on a deployed API to accessing data from a local server using the fetch API. This shift requires setting up and running the local server alongside our client application, facilitating POST requests for adding new data. We've documented the relevant endpoints for both GET and POST requests, and we ensure that newly added data seamlessly updates on the dashboard without requiring a page refresh. Robust error handling is also implemented to ensure the smooth operation of GET and POST requests, with clear user feedback and client-side input validation.

As we moved on to the final iteration for the project we were given a unique path from the rest of the groups working on their versions of the project. In our path, we had to design a motivational tracker. To this end, we implemented a unique message to be displyed on page load as well as a radio selection of 5 different buttons to display how motivated you may feel for a given day. 

## Installation Instructions:
1. Click the green < code > button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Start the webpack by typing npm start into the terminal
9. Copy the link it provides that will look like this: http://localhost:8080/
10. Paste that into your web browser of choice
11. Go to this link: ("https://github.com/turingschool-examples/fitlit-api")
12. Click the green < code > button.
13. Copy the SSH to your terminal.
14. Create a new directory with your clone link.
15. cd into the directory.
16. Run npm install.
17. Run npm start.
18. You should see that the local server is now running. You will now be getting data to populate into the 8080 link.
19. Enjoy!

## Preview of App:



## Context:
For part 2 we took the established project and implemented the feedback we got from our instructor. From there we were able to perfect the formula we had established and add new functionality to the website. We were given a week to work on this and developed the learning as the days went on, but were able to meet our goal with time to spare. Cumulatively, we worked for about 30 hours total on this part which was a very comfortable pace. 

## Learning Goals:

* Data Integration and API Interaction: Learn to fetch data from a local server, manage various types of requests (GET and POST), and ensure real-time updates of newly added data in a web application.

* Feedback Incorporation: Develop the skill to effectively receive and apply feedback from project instructors, seeking clarification when necessary to enhance code quality.

* Code Refactoring: Acquire expertise in identifying and refactoring code to eliminate redundancy, improving codebase maintainability, efficiency, and readability.

* Error Handling and User Feedback: Master the art of implementing error handling mechanisms to ensure a smooth user experience during GET and POST requests, with clear and user-friendly feedback, as well as client-side input validation.

* Motivation Tracking and Personalization: Explore how to incorporate motivation tracking within an application, allowing users to input daily motivation levels, and create a more engaging and personalized user experience using differentiation tracks to maintain user motivation and engagement.

## Major Wins:
### Joey:
Being able to work through and understand how to create a block of code that can properly read characters in an input field. This allowed me to gain a wider grasp into how a information travels between servers and how that relates to GET and POST requests.

### Zen: 
The biggest win was figuring out how to do the POST request. Understanding that the object key values needed to be a specific data type to be put in the server was a small detail that helped overcome this challenge.

### Lex:
When Zen figured out why our POST request wasnt working because we werent transmitting the numbers as integers and were instead sending them as strings it was such a lightbulb moment for me. I had hit a major wall in how it worked and the quick fix Zen was able to find helped me a lot, and I know I can use this for the future.

## Challenges and How We Overcame Them:
### Joey:
A major challenge was trying to get the submitted data to display on the page. I had figured out how to send the data to the server, but I could not pull it back from the server and display it properly. With the help of Jeremiah and Zen, I was able to understand that the inputs were being read solely as string values and not the numbered values that the server and requests were expecting. We were able to change my code to purposefully expect numbered values instead. With these changes, we were able to display the new information onto the fitLit app's Actvitity widget.

### Zen: 
The biggest challenge I had personally was doing the POST request since I didn't have much experience doing it. A big challenge was making sure that the data was in the correct format and that data could not be sent to the server if it was in the wrong format.

### Lex:
The biggest challenge was in learning to write the POST request because it was the major thing that was completely new to me on this iteration of the project. I already knew how to do the radio buttons, the random message display, and the use of beforeEach wasnt a big deal to me, but the POST request was brand new and it took me a bit of work to overcome that.
