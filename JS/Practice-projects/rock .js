const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function displayResult(userChoice, computerChoice, resultMessage) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Computer chose:</strong> ${computerChoice}</p>
        <p><strong>You chose:</strong> ${userChoice}</p>
        <p>${resultMessage}</p>
    `;
}

function handleGameChoice(userChoice) {
    if (userChoice === 'exit') {
        displayResult('', '', 'Thanks for playing!');
        return;
    }
    
    // Generate computer choice
    const computerChoice = getRandomChoice();
    
    // Determine result
    let resultMessage;
    if (userChoice === computerChoice) {
        resultMessage = `It's a draw! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
        userScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`;
        computerScore++;
    }
    
    // Update scores
    updateScore();
    
    // Display results
    displayResult(userChoice, computerChoice, resultMessage);
}

// Mouse events
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', event => {
        handleGameChoice(event.target.id);
    });
});

// Key events
document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key === 'r') {
        handleGameChoice('rock');
    } else if (key === 'p') {
        handleGameChoice('paper');
    } else if (key === 's') {
        handleGameChoice('scissors');
    } else if (key === 'e') {
        handleGameChoice('exit');
    }
});
