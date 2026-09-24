const fs = require("fs");
function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const a1 = parseInt(input[ptr++], 10);
    const a2 = parseInt(input[ptr++], 10);
    const a3 = parseInt(input[ptr++], 10);
    const maxAllThree = Math.min(a1, a2, a3);
    const minWeak = n - maxAllThree;
    console.log(minWeak);
  }
}
solve();
