console.log("Task: 2 ==============================");

function task2() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 1 fulfilled");
      }, 2000);
    });
  }
  
  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 2 fulfilled");
      }, 5000);
    });
  }

  Promise.race([promise1(), promise2()])
  .then(
    (result) => console.log(result),
    (error) => console.log(error)
  )
  .finally(
    () => console.log("Task 2 completed")
  );
}

task2();
