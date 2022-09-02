var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  mainContainer = document.getElementById("main-container");

numbersArray.forEach((item, index) => {
  mainContainer.innerHTML += "<li data-item=" + item + ">" + item + "</li>";
});
shuffleArray = () => {
  let index = 0;
  numbersArray = numbersArray.sort(() => {
    return 0.5 - Math.random();
  });
  mainContainer.innerHTML = "";
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute("data-item", numbersArray[index]);
    mainContainer.appendChild(cubeItem);
    ++index;
  }
};
sortArray = () => {
  let index = 0;
  numbersArray = numbersArray.sort((a, b) => {
    return a - b;
  });
  mainContainer.innerHTML = "";
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute("data-item", numbersArray[index]);
    mainContainer.appendChild(cubeItem);
    ++index;
  }
};
