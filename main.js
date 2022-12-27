const { argv, exit } = require("process");
const path = require("path");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


const fib = (x) => {
  if (x <= 0 || x > 20) {
    return "Zły zakres, wymagane 1-20";
  }
  let fib = new Array(x + 2);
  let i;
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= x; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[x];
};

if (argv[2] !== undefined && argv[2] !== "") {
  result(Math.floor(argv[2]));
  exit(0);
}

readline.question("0<x<21:\n ", (x) => {
  result(Math.floor(x));
  readline.close();
  exit(0);
});

const result = (x) =>
  console.log(`${fib(x)}
${path.basename(argv[1])}
Marek Pieczykolan
2.3`);