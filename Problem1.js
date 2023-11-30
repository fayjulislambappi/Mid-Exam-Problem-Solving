const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateStrikeRate(runs, ballsFaced) {
  if (ballsFaced !== 0) {
    const strikeRate = (runs / ballsFaced) * 100;
    return strikeRate.toFixed(2);
  } else {
    return "Infinity";
  }
}

rl.question("Enter runs scored by the batsman: ", (runsInput) => {
  const runs = parseFloat(runsInput);

  rl.question("Enter total number of balls faced: ", (ballsFacedInput) => {
    const ballsFaced = parseFloat(ballsFacedInput);

    const batsmanStrikeRate = calculateStrikeRate(runs, ballsFaced);
    console.log("Batsman's Strike Rate:", batsmanStrikeRate);

    rl.close();
  });
});
