console.log("Question 1");

const score = 70;

let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score <= 89:
    grade = "B";
    break;
  case score >= 70 && score <= 79:
    grade = "C";
    break;
  case score >= 60 && score <= 69:
    grade = "D";
    break;
  case score < 60:
    grade = "F";
    break;
  default:
    grade = "N/A";
    break;
}

const result = score >= 60 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Result: ${result}`);
