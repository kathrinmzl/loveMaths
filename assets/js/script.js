// Avoid creating global variables to avoid clashes with other scripts!

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements and add event listeners to them
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click", function() {
            // Distinguish what to do depending on which button is clicked
            if(this.getAttribute("data-type") === "submit"){
                // Check Answer if Submit button has been clicked
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // Run game depending on game type
                runGame(gameType);
            }
        });
    }

    // Default game, run when page is loaded and no button has been clicked yet
    runGame("addition");
})

// Create docstring to describe each function. Can be accessed when using the function elsewhere in the code
/**
 * The main game loop, called when the script is first loaded
 * and when the users answer has been processed
 */
function runGame(gameType) {
    // Create two random numbers between 1 and 25
    // Math.floor rounds any floating point number down to a whole number, 
    // therefore +1 needs to be added to Math.random()*25 to increase the range from 0-24 to 1-25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    // Call the appropriate function to display the question, depending on the gameType
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if(gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else if(gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        // throw statement will stop the game  from running and print custom error message 
        // to the console for debugging.
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array.
 */
function checkAnswer() {
    // Get user answer from input field
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    // Get calculated answer (returns array)
    let calculatedAnswer = calculateCorrectAnswer();
    // Compare both answers
    let isCorrect = userAnswer === calculatedAnswer[0];
    // Display alert depending on wether the result is correct or not and increment score accordingly
    if(isCorrect){
        alert("YEEEAH! You got it right!");
        incrementScore();
    } else {
        alert(`Awww... that's wrong. You answered ${userAnswer}, but the correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer()
    }
    // Run a new game of the same type
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (+, -, etc.) from 
 * the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // Get values
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    // Calculate result
    if(operator ===  "+"){
        return[operand1 + operand2, "addition"]
    } else if(operator ===  "x"){
        return[operand1 * operand2, "multiply"]
    } else if(operator ===  "-"){
        return[operand1 - operand2, "subtract"]
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    // Get current score
    let currentScore = parseInt(document.getElementById("score").innerText);
    // Display new score (Increment current score by 1)
    document.getElementById("score").innerText = ++currentScore;
}

/**
 * Gets the current score of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    // Get current score
    let currentScore = parseInt(document.getElementById("incorrect").innerText);
    // Display new score (Increment current score by 1)
    document.getElementById("incorrect").innerText = ++currentScore;
}

function displayAdditionQuestion(operand1, operand2){
    // Set displayed operands to randomly generated numbers
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    // Set displayed operator 
    document.getElementById("operator").textContent = "+";
}

function displayMultiplyQuestion(operand1, operand2){
    // Set displayed operands to randomly generated numbers
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    // Set displayed operator 
    document.getElementById("operator").textContent = "x";
}

function displaySubtractQuestion(operand1, operand2){
    // Set displayed operands to randomly generated numbers
    // Make sure that the bigger operand is set as operand1
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    // Set displayed operator 
    document.getElementById("operator").textContent = "-";
}

function displayDivisionQuestion(operand1, operand2){}
