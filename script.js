function fizzBuzz(choice) {
  for (let i = 1; i <= choice; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

let choice = parseInt(prompt("Enter a number"));

while (isNaN(choice)) {
  choice = parseInt(prompt("You must enter a number"));
}

fizzBuzz(choice);
