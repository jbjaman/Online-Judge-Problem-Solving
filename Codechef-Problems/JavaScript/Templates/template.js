// Templates 01:

"use strict";
const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (!input[0]) return;

  let ptr = 0;
  const output = [];

  // test case from input

  const T = parseInt(input[ptr++], 10);

  for (let t = 0; t < T; t++) {
    // read input

    const a = Number(input[ptr++]);
    const b = Number(input[ptr++]);

    // calcuation / logic

    const result = a + b;

    // result -> push

    output.push(result);
  }

  // print

  console.log(output.join("\n"));
}

solve();

// Templates 02:

("use strict");
const fs = require("fs");

function solve() {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  if (!input[0]) return;

  let ptr = 0;

  // code here

  const a = Number(input[ptr++]);
  const b = Number(input[ptr++]);

  console.log(a + b);
}

solve();
