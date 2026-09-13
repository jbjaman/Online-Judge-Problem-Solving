const fs = require("fs");
function solve() {
  const input = fs.readFileSync("./input.txt", "utf-8");
  const tokens = input.trim().split(/\s+/);
  if (tokens.length === 0 || tokens[0] === "") return;
  let ptr = 0;
  const t = parseInt(tokens[ptr++], 10);
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(tokens[ptr++], 10);
    const p = [];
    for (let i = 0; i < n; i++) {
      p.push(parseInt(tokens[ptr++], 10));
    }
    const wrongIndices = [];
    for (let i = 0; i < n; i++) {
      if (p[i] !== i + 1) {
        wrongIndices.push(i + 1);
      }
    }
    if (wrongIndices.length === 0) {
      console.log("YES");
      continue;
    }
    const m = wrongIndices.length;
    let possible = true;
    for (let j = 0; j < m; j++) {
      const originalIndex = wrongIndices[j];
      const targetIndex = wrongIndices[m - 1 - j];
      if (p[targetIndex - 1] !== originalIndex) {
        possible = false;
        break;
      }
    }
    if (possible) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
solve();
