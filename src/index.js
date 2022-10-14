import './style.css';
import fetchData from './modules/fetchDataFromAPI';
import addScore from './modules/addScore';
    
const submitForm = document.querySelector('form');
const playerScore = document.querySelector('#score');
const playerName = document.querySelector('#name');
const refresh = document.querySelector('.refresh-btn');
const leaderboard = document.querySelector('.scores-list');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addScore(playerName.value, playerScore.value);
    submitForm.reset();
});
  
refresh.addEventListener('click', () => {
    leaderboard.innerHTML = '';
    fetchData();
});
  
window.onload = () => {
    fetchData();
};