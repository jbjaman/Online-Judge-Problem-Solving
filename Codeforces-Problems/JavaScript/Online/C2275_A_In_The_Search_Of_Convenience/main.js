const fs = require("fs");

function solve() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let t = parseInt(input[0]);
  let ptr = 1;
  let result = [];
  for (let i = 0; i < t; i++) {
    let x0 = parseInt(input[ptr++]);
    let y0 = parseInt(input[ptr++]);
    let R = parseInt(input[ptr++]);
    let x = x0 + R;
    let y = y0;
    result.push(`${x} ${y}`);
  }
  console.log(result.join(`\n`));
}
solve();
