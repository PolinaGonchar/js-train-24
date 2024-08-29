console.log("Task: 6 ==============================");

function task6() {
  const newPromise = new Promise((resolve, reject) => {
    setImmediate(() => {
      let randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve("Greater than 0.5");
      } else {
        reject("Less than 0.5");
      }
    });
  });

  newPromise
    .then((value) => console.log(`Promise resolved with value: ${value}`))
    .catch((error) => console.log(`Promise rejected with error: ${error}`))
    .finally(() => console.log("Promise completed"));
}

task6();