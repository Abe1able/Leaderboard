const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/puvcouP5rfhcu4N1P4RK/scores';

const addScore = async (inputName, inputScore) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: inputName,
        score: inputScore,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  };
  
export default addScore;