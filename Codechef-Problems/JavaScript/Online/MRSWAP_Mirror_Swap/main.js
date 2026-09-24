"use strict";

const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

let index = 0;

const T = input[index++];

for (let t = 0; t < T; t++) {
  const N = input[index++];

  let A = [];

  for (let i = 0; i < 2 * N; i++) {
    A.push(input[index++]);
  }

  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Math.max(A[i], A[2 * N - 1 - i]);
  }

  console.log(sum);
}
