var scoreBoard = {
  1: 3,
  2: 1,
  3: 2
}
var choice = {
  1: 'rock',
  2: 'paper',
  3: 'rock'
}
let userScore = 0;
let compScore = 0;
const move = (val) => {
    var random = randomNum();
    if(scoreBoard[val] == random){
      // console.log(`You won you choose: ${val} and AI choose: ${random}`);
      userScore++;
      document.getElementById('user').innerHTML = userScore;
      document.getElementById('description').innerHTML = `You choose ${choice[val]} and AI choose ${choice[random]}`;
    }
    else if(val == random){
      alert("Match Draw");
    }
    else{
      compScore++;
      document.getElementById('comp').innerHTML = compScore;
      document.getElementById('description').innerHTML = `You choose ${choice[val]} and AI choose ${choice[random]}`;
    }
}

const randomNum = () => {
  return Math.floor(Math.random() * (4 - 1)) + 1;
}
