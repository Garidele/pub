/* choose a random number betwwen 0 and 1 (ex: 0.67 0.811)
/* generate a random number
   Math.floor --> removes decimales */
let randomNumber = Math.floor(Math.random() * 100) + 1;

// To save the guesses

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowORhi = document.querySelector('.lowORhi');

// to save inputs and activate button

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;

let resetButton;

function checkGuess()
{
    let userGuess = Number(guessField.value);
    if(guessCount === 1)
    {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";
    if(userGuess === randomNumber)
    {
        lastResult.textContent = "Felicitari! Ai ghicit!";
        lastResult.style.backgroundColor = "green";
        lastResult.style.color = "white";
        lowORhi.textContent = "";
        setGameOver();
    }
    else if(guessCount === 10)
    {
        lastResult.textContent = "Game over!";
        setGameOver();
    }
    else
    {
        lastResult.textContent = "Incorect!";
        lastResult.style.backgroundColor = "red";
        lastResult.style.color = "white";
        if(userGuess < randomNumber)
        {
            lowORhi.textContent = "The number is greater than that";
        }
        else if(userGuess > randomNumber)
        {
            lowORhi.textContent = "The number is lesser than that";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver()
{
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = "Restart game";

    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//reset all the variables
function resetGame()
{
    guessCount = 1;

    const resetParagraphs = document.querySelectorAll('.resultParagraphs p');
    for(let i=0; i<resetParagraphs.length; i++)
    {
        resetParagraphs[i].textContent = "";
        resetParagraphs[i].style.backgroundColor = 'black';
    }

    // delete the reset button
    resetButton.parentNode.removeChild(resetButton);

    //reactivate input and submit button
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'black';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}