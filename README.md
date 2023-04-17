# Number Game

# TechStack
 # Front-End
- HTML
- CSS
- JavaScript
- React

# Back-End
- NodeJS
- Express
- MongoDB

# External CSS Library
-Chakra UI

#Front-End Deployment - vercel
#Back-End Deployment - render

# Homepage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/232585033-d4b36517-e978-4a84-bf8b-5df458c0c6ea.png"/></td>
    
  </tr>
</table>

# Playgame Page
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/232585542-5f114e29-2af1-4d02-b33a-eb5a828b2d54.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/232585633-7dd115fe-9531-43e7-bf2a-b9a451859a39.png"/></td>
  </tr>
</table>

# Leaderboard Page
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/232585658-12dbd855-8df8-426c-8df9-fa4df39a7dde.png"/></td>
  </tr>
</table>



# `**Problem Statement**`

The objective is to create a Number Game featuring three different levels of difficulty, where players must arrange numbers in order (ascending) within a designated time frame.

## `**Routes**`

- App have the following routes
    - Home Route **( / ) - Include in Navbar**
    - Play Route  **( /play ) - Don’t Include in Navbar**
    - Leaderboard Route **( /leaderboard ) - Include in Navbar**

## `**Home Route**`

- Home Route should have a form which takes following information from the user
    - Name
    - Difficulty level (Select tag with Easy, Medium, and Hard as options)
- Upon submitting the form, store the data in json-server and the user will be directed to the **Play Route**.

---

# `**Play Route**`

- In the Play Route, a list of random numbers (between 1 to 100)  will be generated based on the chosen difficulty level.
    - Easy (5 Numbers)
    - Medium (7 Numbers)
    - Hard (10 Numbers)

- The user should reorder the numbers in ascending order within a specified time frame, which also is determined by the selected difficulty level
    - Easy (60 Seconds)
    - Medium (40 Seconds)
    - Hard (30 Seconds)

- For Ordering the number, the user should be able to **Drag and Drop** the numbers to change their position.
- You can make use of [**react-beautiful-dnd npm package**](https://www.npmjs.com/package/react-beautiful-dnd) to implement this or any external package of your choice.

- The timer should be rendered in the UI based on the selected difficulty.
- If the timer runs out, render a “Game Over” screen with a “**Retry**” and “**Quit**” button.
- If the user is able to finish the game within time, render a “You Won” screen with “**Play Again**” and “**Quit**” button.
- Clicking on “**Retry**” or “**Play Again**”  the user should be able to play the game again on the same level.
- Clicking on “**Quit**” the player should be redirected to the the **Home Route**, where they can start a new game.

[                                                                          Gameplay Demo](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76c40691-5884-4434-a7ee-b051391b0d43/video3101943016.mp4)

                                                                          Gameplay Demo

---

# `**Leaderboard Route**`

- The Leaderboard Route will display a table of scores sorted in descending order based on the highest score at the top of the table.
- Users can view the names of all the players along with their scores.
- The Scoring system is based on the following:
    - Easy Level - ( 5 Points)
    - Medium Level - ( 7 Points)
    - Hard Level - (10 Points)
- Note : When the player completes two games, one at the Easy level and the other at the Medium level, their total score will be calculated as the sum of the scores of each game. For instance, the player will obtain a score of 12 points if they successfully complete both games, as the Easy level awards 5 points and the Medium level awards 7 points.
