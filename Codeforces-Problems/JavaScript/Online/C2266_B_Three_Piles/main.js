const fs = require("fs");
function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  const results = [];
  for (let i = 0; i < t; i++) {
    const a = BigInt(input[ptr++]);
    const b = BigInt(input[ptr++]);
    const c = BigInt(input[ptr++]);
    const opt1 = b - a;
    const diff = a + c - b;
    const opt2 = diff < 0n ? -diff : diff;
    const ans = opt1 > opt2 ? opt1 : opt2;
    results.push(ans.toString());
  }
  console.log(results.join("\n"));
}
solve();
