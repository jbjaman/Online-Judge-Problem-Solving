"use strict";

const fs = require("fs");

function main() {
  //   const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  const input = fs.readFileSync("input.txt", "utf-8").trim().split(/\s+/);

  if (!input[0]) return;

  let ptr = 0;

  const L = parseInt(input[ptr++], 10);
  const R = parseInt(input[ptr++], 10);

  if (L !== R || L % 2 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main();
