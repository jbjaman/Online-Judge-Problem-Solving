const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let test = 0; test < t; test++) {
    const n = parseInt(input[ptr++], 10);
    const c = input[ptr++];
    const s = input[ptr++];
    let totalCoins = 0;
    let left = 0;
    let right = n - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        if (s[left] === c || s[right] === c) {
          totalCoins += 1;
        } else {
          totalCoins += 2;
        }
      }
      left++;
      right--;
    }
    console.log(totalCoins);
  }
}
solve();
