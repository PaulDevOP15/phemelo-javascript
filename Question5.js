console.log("Question 5");

const numbersA = [1, 2, 3, 4];
const numbersB = [5, 6, 7, 8];
const combined = [...numbersA, ...numbersB];

console.log(combined);

const totalRows = 5;

for (let row = 1; row <= totalRows; row++) {
  const leadingSpaces = " ".repeat(totalRows - row);
  const starLine = Array(row).fill("*").join(" ");
  console.log(leadingSpaces + starLine);
}

let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
