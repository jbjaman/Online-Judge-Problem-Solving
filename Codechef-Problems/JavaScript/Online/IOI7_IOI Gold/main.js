const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const G = input[1];

if (N >= G) {
  console.log("Yes");
} else {
  console.log("No");
}
