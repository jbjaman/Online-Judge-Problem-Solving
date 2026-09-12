const fs = require("fs");
function main() {
  const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") {
    return;
  }
  let index = 0;
  const t = parseInt(input[index++], 10);
  const answer = [];
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[index++], 10);
    let ones = 0;
    for (let i = 0; i < n; i++) {
      const value = parseInt(input[index++], 10);
      if (value === 1) {
        ones++;
      }
    }
    const zeros = n - ones;
    if (ones >= zeros) {
      answer.push("Bessie");
    } else {
      answer.push("Elsie");
    }
  }
  console.log(answer.join("\n"));
}
main();
