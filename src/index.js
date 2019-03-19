module.exports = function getZerosCount(number, base) {

  function getSimpleNumber(base) {
    let arr = [];
    if (base > 0 && base != 1) {
      for (let i = 2; i <= base; i++) {
        while (base % i == 0 && base > 1) {
          arr.push(i);
          base = base / i;
        }
        if (base / i == 1) {
          arr.push(base);
        }
      }
      // console.log(arr);
      return arr;
    } else if (base == 1) {
      return 1;
    }
    return 'Введите не отрицательное число';
  }

  const getSum = (simpleNumber) => {
    let sum = 0;
    let j = 1;
    do {
      num = (number / Math.pow(simpleNumber, j)) ^ 0;
      sum += num;
      j++;

    } while (num > 1)
    return sum;
  }

  const getDivider = (searchNumb) => {
    let counter = simpleBase.filter((item) => {
      return item == searchNumb;
    })
    return counter.length;
  }

   // Find simple numbers
  let simpleBase = getSimpleNumber(base);
  // Find unique simple numbers
  let simpleArray = [];
  simpleArray.push(simpleBase[0]);
  for (let i = 0; i < simpleBase.length; i++) {
    if (!simpleArray.includes(simpleBase[i])) {
      simpleArray.push(simpleBase[i]);
    }
  }

  // Find sum of simpleNumbers
  let result = [];
  for (let i = 0; i < simpleArray.length; i++) {
    result.push(getSum(simpleArray[i]));
  }

  // Counter of all numbers
  let uniqueNumbersCounter = [];
  for (let i = 0; i < simpleArray.length; i++) {
    uniqueNumbersCounter.push(getDivider(simpleArray[i]));
  }
  // Just need to devide and find min!
  let minResult = [];
  for (let i = 0; i < result.length; i++) {
    minResult.push(result[i] / uniqueNumbersCounter[i]);
  }

  return Math.min.apply(null, minResult) ^ 0;

}