console.log("Task: 8 ==============================");

function task8() {
  function fetchFakeData(){
    const fakeData = { name: "John",age: 30};
    return Promise.resolve(fakeData)
  }
  fetchFakeData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}

task8();
