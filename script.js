'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    //when player wins
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    // when guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//RESET Game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
