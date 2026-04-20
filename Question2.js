console.log("Question 2");

const stringInput = "25";
const asNumber = Number(stringInput);

console.log(`Input string: "${stringInput}"`);
console.log(`Converted to number: ${asNumber} (type: ${typeof asNumber})\n`);

console.log("Truthy / falsy checks (using if (value)):\n");

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("") {
  console.log('"" (empty string) is truthy');
} else {
  console.log('"" (empty string) is falsy');
}

if ("hello") {
  console.log('"hello" is truthy');
} else {
  console.log('"hello" is falsy');
}

if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

if (undefined) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

if (NaN) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsy");
}
