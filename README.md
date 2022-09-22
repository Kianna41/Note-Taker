# Note-Taker

## Expected Outcome

1. When user opens the Note Taker, they are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
2. When the user enters a new note title and note's text, a Save icon appears in the navigation at the top of the page.
3. When the user clicks the Save icon, a new note I have entered is saved and appears in the left-hand column with the other existing notes.
4. When the user click on an existing note in the list on the left-hand column, that note appears in the right-hand column.
5. When the user clicks on the Write icon in the navigation at the top of the page, an empty field appears to enter a new note title and note text on the right-hand column.

## What to include

1. Application should have db.json file on the back end that will be used to store and retrieve noted using fs module
2. Application should have GET/notes that returns notes.html file
3. Application should have GET/\* that returns index.html file
4. Application should have GET/api/notes that reads the db.json file and returns all saved notes as JSON
5. Application should have POST/api/notes that receives a new note to save on the request body, add it to the db.json file, and then return note to client.
6. Each note should have a unique ID.



Link to deployed Heroku: https://pure-retreat-24040.herokuapp.com/

Link to GitHub: https://github.com/Kianna41/Note-Taker


https://user-images.githubusercontent.com/107634328/191637668-164bb726-9f5e-405d-b48e-b779f083122c.mov

