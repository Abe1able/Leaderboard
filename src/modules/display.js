const leaderboard = document.querySelector('.scores-list');
const display = (scores) => {
    scores.sort((a, b) => b.score - a.score).forEach((score) => {
    leaderboard.innerHTML += ` <li class="Scores">${score.user}  ${score.score}</li>`;
  });
};
export default display;