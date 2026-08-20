const fs = require("fs");

// const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const input = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

const t = input[0];

let index = 1;

let output = [];

for (let i = 0; i < t; i++) {
  let a = input[index++];
  let b = input[index++];
  let c = input[index++];

  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  let answer;

  if (c > a + b) {
    answer = Math.min(c - a, b);
  } else {
    answer = c - a;
  }
  output.push(answer);
}

console.log(output.join("\n"));
