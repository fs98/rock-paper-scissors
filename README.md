# Brainnest Frontend Training Program

## Assignment (Rock Paper Scissors Game)

The third assignment in a Brainnest Frontend Training Program - JavaScript Assignment - Part 1

### The requirements:

**PART ONE - LOGIC**

1. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

2. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

3. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

4. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

5. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results.

6. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

   - Remember loops? This is a great opportunity to use one to play those five rounds.
   - At this point you should be using console.log() to display the results of each round and the winner at the end.
   - Use prompt() to get input from the user. Read the docs here.
   - Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
   - Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

**PART TWO - UI**

1. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

2. For now, remove the logic that plays exactly five rounds.

3. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

4. Add a div for displaying results and change all of your console.logs into DOM methods.

5. Display the running score, and announce a winner of the game once one player reaches 5
   points.
