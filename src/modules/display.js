const leaderboard = document.querySelector('.scores-list');
const display = (scores) => {
    scores.sort((a, b) => b.score - a.score).forEach((score) => {
    leaderboard.innerHTML += ` <li class="scores"><p class="name">${score.user}</p> <p class="score">${score.score}</p></li>`;
  });
};
export default display;