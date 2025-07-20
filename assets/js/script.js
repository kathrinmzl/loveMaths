// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements and add event listeners to them
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click", function() {
            // Distinguish what to do depending on which button is clicked
            if(this.getAttribute("data-type") === "submit"){
                // Display alert message
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
})

// Create docstring to describe each function. Can be accessed when using the function elsewhere in te code
/**
 * The main game loop, called when the script is first loaded
 * and when the users answer has been processed
 */
function runGame() {
    // Create two random numbers between 1 and 25
    // Math.floor rounds any floating point number down to a whole number, 
    // therefore +1 needs to be added to Math.random()*25 to increase the range from 0-24 to 1-25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;


}

function checkAnswer() {}
function calculateCorrectAnswer() {}
function incrementScore(){}
function incrementWrongAnswer(){}
function displayAdditionQuestion(){}
function displaySubtractQuestion(){}
function displayMultiplyQuestion(){}
function displayDivisionQuestion(){}
