const fs = require("fs");

// const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const input = fs.readFileSync("input.txt", "utf8").trim().split(/\s+/);

let index = 0;

const t = Number(input[index++]);

function isPrm(number) {
  if (number < 2) {
    return false;
  }
  for (let j = 2; j * j <= number; j++) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
}

let arr = [];
for (let i = 0; i < t; i++) {
  const num = Number(input[index++]);
  if (isPrm(num + 1)) {
    arr.push("YES");
  } else {
    arr.push("NO");
  }
}

console.log(arr.join("\n"));
