const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (!input || input.length < 3) {
    return;
  }

  const X = parseInt(input[0], 10);
  const Y = parseInt(input[1], 10);
  const K = parseInt(input[2], 10);

  const distance = Math.abs(X - Y);

  if (distance <= K) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

solve();
