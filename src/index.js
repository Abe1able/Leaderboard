import './style.css';
import scores from './modules/scores.js';

const scoresList = document.querySelector('.scores-list');

scoresList.innerHTML = scores.map((e) => `
        <p class="score-table">${e.Name}: ${e.Score}</p>
    `).join('');