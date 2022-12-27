const { argv, exit } = require("process");
const path = require("path");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fib = (number) => {
  if (number > 20 || number <= 0) {
    return "Złe dane!";
  }
  let fib = new Array(number + 2);
  let i;
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[number];
};

const result = (input) =>
  console.log(`${input}: ${fib(input)}
${path.basename(argv[1])}
Marek Pieczykolan
2.3`);

if (argv[2] !== undefined && argv[2] !== "") {
  result(Math.floor(argv[2]));
  exit(0);
}

readline.question("0<x<21:\n ", (number) => {
  result(Math.floor(number));
  readline.close();
  exit(0);
});