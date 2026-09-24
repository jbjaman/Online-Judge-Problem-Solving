const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let ptr = 0;
  let t = parseInt(input[ptr++], 10);
  while (t > 0 && ptr < input.length) {
    let n = parseInt(input[ptr++], 10);
    let k = parseInt(input[ptr++], 10);
    let C = [];
    for (let i = 0; i < n; i++) {
      C.push(parseInt(input[ptr++], 10));
    }
    let minCost = Infinity;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let leftCovered = Math.max(0, i - k) === 0 || Math.max(0, j - k) === 0;
        let rightCovered =
          Math.min(n - 1, i + k) === n - 1 || Math.min(n - 1, j + k) === n - 1;
        let minLeft = Math.min(i - k, j - k);
        let maxRight = Math.max(i + k, j + k);
        if (minLeft <= 0 && maxRight >= n - 1) {
          let range1Right = i + k;
          let range2Left = j - k;
          if (range1Right + 1 >= range2Left) {
            let currentCost = C[i] + C[j];
            if (currentCost < minCost) {
              minCost = currentCost;
            }
          }
        }
      }
    }
    if (minCost === Infinity) {
      console.log(-1);
    } else {
      console.log(minCost);
    }
    t--;
  }
}
solve();
