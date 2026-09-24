"use strict";

const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

let index = 0;

const T = input[index++];

for (let t = 0; t < T; t++) {
  const N = input[index++];

  let odd = 0;
  let even = 0;

  for (let i = 0; i < N; i++) {
    const x = input[index++];

    if (x % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  const answer = Math.min(N, 2 * Math.min(odd, even) + 1);

  console.log(answer);
}
