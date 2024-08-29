console.log("Task: 4 ==============================");

function task4() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 1 fulfilled");
      }, 1000);
    });
  }

  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 2 fulfilled");
      }, 2000);
    });
  }

  Promise.all([promise1(), promise2()])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("All operations completed");
    });
}

task4();
