console.log("Task: 5 ==============================");

function task5() {
  let counter = 0;
  let intervalPromise =
    new Promise((resolve, reject) => {
      let intervalId = setInterval(() => {
        counter++;
        console.log(`Counter value: ${counter}`);
        if (counter >= 5) {
          clearInterval(intervalId);
          resolve(counter);
        }
      }, 1000);
    });

  intervalPromise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log("Counter completed"));
}

task5();
