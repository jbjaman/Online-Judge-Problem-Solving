const fs = require("fs");

function solve() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") {
    return;
  }
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const a = [];
    let easyCount = 0;

    for (let j = 0; j < n; j++) {
      const val = parseInt(input[ptr++], 10);
      a.push(val);
      if (val === 0) {
        easyCount++;
      }
    }
    if (easyCount < 2) {
      console.log(-1);
      continue;
    }
    let ops = 0;
    if (a[0] === 1) {
      ops++;
    }
    if (a[n - 1] === 1) {
      ops++;
    }
    console.log(ops);
  }
}

solve();
