const fs = require("fs");

function reachWeight() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  const T = parseInt(input[0], 10);

  for (let i = 1; i <= T; i++) {
    const N = parseInt(input[i], 10);
    const twoKg = Math.floor(N / 2);
    const oneKg = N % 2;

    const minimumCost = twoKg * 30 + oneKg * 20;

    console.log(minimumCost);
  }
}
reachWeight();
