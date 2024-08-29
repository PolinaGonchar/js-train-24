console.log("Task: 9 ==============================");

function task9() {
  function fetchWithError() {
    const errorMessage = "Error connecting to the server";
    return Promise.reject(errorMessage);
  }

  fetchWithError()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

task9();
