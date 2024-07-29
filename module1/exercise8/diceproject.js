// document.getElementById('roll-button')

var rollresult = document.getElementById("roll=result");

var rollButton = document.getElementById("roll-button");

var diceType = document.getElementById("dice-type").value;

function rollDice() {
  diceType = document.getElementById("dice-type").value;
  return Math.floor(Math.random() * diceType) + 1;
}

let result = rollDice();
rollresult.textContent = result;

rollButton.addEventListener("click", () => {
  let result = rollDice();
  rollresult.textContent = result;
  console.log(diceType);
});
