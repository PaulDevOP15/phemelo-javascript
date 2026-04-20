console.log("Question 3");

function greetingBot(name, isMorning) {
  return (
    (isMorning && `Good morning, ${name}!`) ||
    `Hello, ${name}!`
  );
}

console.log(greetingBot("Phemelo", true));
console.log(greetingBot("Neo", false));
console.log(greetingBot("Mosa", true));
console.log(greetingBot("Zaio", false));
