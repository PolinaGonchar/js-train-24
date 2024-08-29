console.log("Task: 10 ==============================");

function task10() {
  const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 500, "Promise 1"));
  const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 200, "Promise 2"));
  const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 300, "Promise 3")
  );
  Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
}

task10();
