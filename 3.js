console.log("Task: 3 ==============================");

function task3() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise 1 fulfilled');
      }, 1000);
    });
  }
  
  function promise2() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Promise 2 rejected");
      }, 2000);
    });
  }

  Promise.allSettled([promise1(), promise2()])
    .then(
      (results) =>
        results.forEach((result, index) => {
          console.log(`Promise ${index + 1}: ${result.status}`);
        })
    )
    .finally(
      () => console.log("Task 3 completed")
    );
}

task3();
