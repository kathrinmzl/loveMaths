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

function runGame() {

}

function checkAnswer() {}
function calculateCorrectAnswer() {}
function incrementScore(){}
function incrementWrongAnswer(){}
function displayAdditionQuestion(){}
function displaySubtractQuestion(){}
function displayMultiplyQuestion(){}
function displayDivisionQuestion(){}
