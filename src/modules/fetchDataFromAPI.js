import display from './display.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/puvcouP5rfhcu4N1P4RK/scores';
const fetchData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((json) => display(json.result));
  };
export default fetchData;