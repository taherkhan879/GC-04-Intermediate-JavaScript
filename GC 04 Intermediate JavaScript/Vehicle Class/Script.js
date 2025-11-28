const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Take Vehicle Details
rl.question("Enter Vehicle Name: ", (name) => {
  rl.question("Enter Horsepower (hp): ", (hpInput) => {
    rl.question("Enter Top Speed: ", (topSpeedInput) => {

      let hp = parseFloat(hpInput);
      let topSpeed = parseFloat(topSpeedInput);

      class Vehicle {
        constructor(name, hp, topSpeed) {
          this.name = name;
          this.hp = hp;
          this.topSpeed = topSpeed;
          this.speed = 0.0;
          this.interval = null;
        }

        start() {
          console.log("\nVehicle Started ✅");
          console.log("Speed:", this.speed.toFixed(1), "(GREEN)");
        }

        accelerate() {
          if (this.interval) return;

          this.interval = setInterval(() => {
            this.speed += this.hp / 5;

            if (this.speed > this.topSpeed) {
              this.speed = this.topSpeed;
            }

            process.stdout.write("\rSpeed: " + this.speed.toFixed(1));
          }, 10);
        }

        brake() {
          if (this.interval) return;

          this.interval = setInterval(() => {
            this.speed -= this.hp / 2;

            if (this.speed < 0) {
              this.speed = 0;
            }

            process.stdout.write("\rSpeed: " + this.speed.toFixed(1));
          }, 10);
        }

        stop() {
          clearInterval(this.interval);
          this.interval = null;
          this.speed = 0.0;
          console.log("\nVehicle Stopped ❌");
          console.log("Speed:", this.speed.toFixed(1), "(RED)");
        }

        release() {
          clearInterval(this.interval);
          this.interval = null;
        }
      }

      let myVehicle = new Vehicle(name, hp, topSpeed);

      console.log("\n--- VEHICLE DASHBOARD ---");
      console.log("Vehicle:", name);
      console.log("HP:", hp);
      console.log("Top Speed:", topSpeed);
      console.log("Initial Speed:", myVehicle.speed.toFixed(1), "(RED)");

      console.log(`
Controls:
1 → START
2 → ACCELERATE (Hold)
3 → RELEASE ACCELERATOR
4 → BRAKE (Hold)
5 → RELEASE BRAKE
6 → STOP
7 → EXIT
`);

      function menu() {
        rl.question("Enter your choice: ", (choice) => {
          switch (choice) {
            case "1":
              myVehicle.start();
              break;

            case "2":
              myVehicle.accelerate();
              break;

            case "3":
              myVehicle.release();
              console.log("\nAcceleration Released");
              break;

            case "4":
              myVehicle.brake();
              break;

            case "5":
              myVehicle.release();
              console.log("\nBrake Released");
              break;

            case "6":
              myVehicle.stop();
              break;

            case "7":
              console.log("Program Ended.");
              rl.close();
              return;

            default:
              console.log("Invalid Choice!");
          }

          menu();
        });
      }

      menu();
    });
  });
});
