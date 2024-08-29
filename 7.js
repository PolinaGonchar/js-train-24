console.log("Task: 7 ==============================");

function task7() {
  let newPromise = new Promise((resolve, reject) => {
    let intervalId = setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      console.log(`Current seconds: ${seconds}`);
      if (seconds % 10 === 0) {
        clearInterval(intervalId);
        resolve("Current seconds are multiples of 10!");
      }
      if (seconds % 3 === 0) {
        clearInterval(intervalId);
        reject("Current seconds are multiples of 3!");
      }
    }, 1000);
  });

  newPromise
    .then((value) => console.log(`Promise resolved with value: ${value}`))
    .catch((error) => console.log(`Promise rejected with error: ${error}`))
    .finally(() => console.log("Promise completed"));
}

task7();