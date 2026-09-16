// your code goes here

const fs = require("fs");

function solve() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") {
    return;
  }
  let ptr = 0;
  const T = parseInt(input[ptr++], 10);

  for (let i = 0; i < T; i++) {
    const N = parseInt(input[ptr++], 10);
    const K = parseInt(input[ptr++], 10);

    if (K <= N) {
      console.log(0);
    } else {
      console.log((K - N) * 2);
    }
  }
}

solve();
