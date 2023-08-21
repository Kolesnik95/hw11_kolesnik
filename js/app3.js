function arr() {
    const mainArrayLength = parseInt(prompt("Введите длину основного массива:"));
    const subArrayLength = parseInt(prompt("Введите длину внутренних массивов:"));
    const mainArray = [];
    for (let i = 0; i < mainArrayLength; i++) {
      const subArray = [];
      for (let j = 0; j < subArrayLength; j++) {
        const value = prompt(`Введите значение для элемента [${i+1}][${j+1}]:`);
        subArray.push(value);
      }
      mainArray.push(subArray);
    }
    return mainArray;
  }
  const userArray = arr();
  console.log(userArray);