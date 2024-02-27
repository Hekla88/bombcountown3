let countdown = 25 * 60; // 25 minutes in seconds
let timerDisplay = document.getElementById('countdown');
let timerInterval;

function startCountdown() {
    timerInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (countdown === 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Boom!";
    } else {
        countdown--;
    }
}

document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let codeInput = document.getElementById('codeInput').value;
    if (codeInput === '145') {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Bomb defused!";
    } else {
        alert("Wrong code!");
    }
});
startCountdown();
