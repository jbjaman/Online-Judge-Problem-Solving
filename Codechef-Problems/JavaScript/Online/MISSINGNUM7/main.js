const fs = require("fs");

function missingNumber() {
  const input = fs.readFileSync(0, "utf-8").trim();
  if (!input) {
    return;
  }
  const S = parseInt(input, 10);
  const total = 10;
  const missing = total - S;
  console.log(missing);
}

missingNumber();
