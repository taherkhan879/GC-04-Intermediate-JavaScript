let count = 0;

console.log("COUNTER APPLICATION");
console.log("Commands:");
console.log("1 → Add");
console.log("2 → Subtract");
console.log("3 → Reset");
console.log("4 → Exit\n");

console.log("Current Value:", count);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function askUser() {
  readline.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        count++;
        console.log("Value after Add:", count);
        break;

      case "2":
        count--;
        console.log("Value after Subtract:", count);
        break;

      case "3":
        count = 0;
        console.log("Value after Reset:", count);
        break;

      case "4":
        console.log("Program Ended.");
        readline.close();
        return;

      default:
        console.log("Invalid choice!");
    }

    askUser();
  });
}

askUser();
