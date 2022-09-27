# NoteTaker
Tyler Morse<br>
Note taking application<br>
<br>
User Story:<br>
AS A small business owner<br>
I WANT to be able to write and save notes<br>
SO THAT I can organize my thoughts and keep track of tasks I need to complete<br>
<br>
Acceptance Criteria:<br>
GIVEN a note-taking application<br>
WHEN I open the Note Taker<br>
THEN I am presented with a landing page with a link to a notes page<br>
WHEN I click on the link to the notes page<br>
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column<br>
WHEN I enter a new note title and the note’s text<br>
THEN a Save icon appears in the navigation at the top of the page<br>
WHEN I click on the Save icon<br>
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes<br>
WHEN I click on an existing note in the list in the left-hand column<br>
THEN that note appears in the right-hand column<br>
WHEN I click on the Write icon in the navigation at the top of the page<br>
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column<br>
<br>
Description:<br>
This application is executed through node.js, including the "fs", "express", and "uniqid" npms. This application represents the back end of a note taking application, using multiple landing pages while making successful GET, POST, and DELETE requests to a .json file to allow the user to take, view, and delete notes within the application.<br>
<img src="/images/screenshot.png" alt="An image of the deployed application">
A link to the deployed Heroku application can be found <a href="https://lit-everglades-41850.herokuapp.com/">here</a>