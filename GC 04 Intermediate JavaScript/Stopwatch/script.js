console.log("STOPWATCH IS LOADING...");

setTimeout(() => {
  console.log("STOPWATCH STARTED");
  startStopwatch();
}, 2000);

let time = 0;
let timer = null;

function startStopwatch() {
  timer = setInterval(() => {
    time += 0.01;
    process.stdout.write("\rTime: " + time.toFixed(2) + " sec");
  }, 10);

  // Auto stop after 10 seconds (for testing)
  setTimeout(() => {
    stop();
    reset();
  }, 10000);
}

function stop() {
  clearInterval(timer);
  console.log("\nSTOPPED");
}

function reset() {
  time = 0;
  console.log("RESET TO 0.00");
}
