const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let t = parseInt(input[0], 10);
  let index = 1;

  while (t > 0 && index < input.length) {
    let n = parseInt(input[index++], 10);
    let k = parseInt(input[index++], 10);
    let totalTime = n + Math.floor((n - 1) / (k - 1));
    console.log(totalTime);
    t--;
  }
}
solve();
