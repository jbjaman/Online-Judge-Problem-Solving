const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim();
  const S = input.split(/\s+/)[0];
  if (S[0] === S[2] && S[1] === S[3]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

solve();
