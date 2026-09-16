// your code goes here

const fs = require("fs");

function main() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);
  if (input.length < 2) {
    return;
  }
  const A = parseInt(input[0], 10);
  const B = parseInt(input[1], 10);

  let diff = A - B;

  if (diff % 2 !== 0) {
    console.log(-1);
  } else {
    console.log(diff / 2);
  }
}

main();
