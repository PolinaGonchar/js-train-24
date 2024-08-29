console.log("Task: 1 ==============================");

function task1() {
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Object.keys(data).length){
          resolve(data);
        } else {
          reject(new Error("The object is empty"));
        }
      }, timeout);
    });
  }

  let promise = getData({ name: "John", age: 30, city: "New York" });
  promise
  .then(
    (data) => console.log(data),
    (error) => console.log(error.message)
  )
  .finally(
    () => console.log("Task 1 completed")
  );
}

task1();
