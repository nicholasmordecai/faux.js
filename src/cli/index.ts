#!/usr/bin/env node

import yargs from "yargs";
import chalk from "chalk";

const parser = yargs(process.argv.slice(2)).options({
  a: { type: "boolean", default: false },
  b: { type: "string", demandOption: true },
  c: { type: "number", alias: "chill" },
  d: { type: "array" },
  e: { type: "count" },
  f: { choices: ["1", "2", "3"] },
});

async function runCli() {
  const argv = await parser.argv;
  console.log(chalk.green(argv.a));
}

runCli();
