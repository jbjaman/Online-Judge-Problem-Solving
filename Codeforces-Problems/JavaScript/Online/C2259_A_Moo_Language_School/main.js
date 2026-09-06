const fs = require("fs");

function solve() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  const results = [];
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[ptr++], 10);
    const k = parseInt(input[ptr++], 10);
    const s = input[ptr++];

    let nhojSchools = 0;
    const numFarms = n / k;

    for (let i = 0; i < numFarms; i++) {
      let hasFreeLand = false;

      for (let j = 0; j < k; j++) {
        if (s[i * k + j] === "0") {
          hasFreeLand = true;
          break;
        }
      }
      if (!hasFreeLand) {
        nhojSchools++;
      }
    }
    results.push(nhojSchools);
  }
  console.log(results.join("\n"));
}
solve();
