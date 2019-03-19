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
  let simpleBase = getSimpleNumber(base);  // SIMPLE NUMBERS FROM BASE
  console.log(`SimpleBase = ${simpleBase}`); /* it's simple numbers */
  let simpleArray = [];
  simpleArray.push(simpleBase[0]);
  // console.log(`SimpleArray = ${simpleArray}`);

  for (let i = 0; i < simpleBase.length; i++) {
    if (!simpleArray.includes(simpleBase[i])) {
      simpleArray.push(simpleBase[i]);
    }
    // Okey! I have array with a simple basic numbers. It's cool! And now i should to find zeros)
  }

  console.log(`Простые числа базы: ${simpleArray}`);
  let arrayLength = simpleArray.length;
  console.log(`Длина массива базы =  ${arrayLength}`);

  const getSum = (simpleNumber) => {
    let sum = 0;
    let j = 1;
    do {
      num = (number / Math.pow(simpleNumber, j)) ^ 0;
      sum += num;
      // console.log(`TEST: number = ${number}, j = ${j}, num = ${num}, sum = ${sum}`);
      j++;

    } while (num > 1)
    return sum;
  }

  let result = [];
  ////////////
                          for (let i = 0; i < simpleArray.length; i++) {
                            result.push(getSum(simpleArray[i]));
                          }
                          console.log(`Суммы чисел после деления: `, result)
  ///////////
  // FIND MIN

  // if (simpleBase.length != simpleArray.length && simpleArray.length == 1) {
  //   return (result[0] / simpleBase.length)^0
  // } else {
  //   return Math.min.apply(null, result)
  // }
  const getDivider = (searchNumb) => {
    let counter = simpleBase.filter((item) => {
      return item == searchNumb;
    })
    return counter.length;
  }

  let uniqueNumbersCounter = [];
  for (let i = 0; i < simpleArray.length; i++) {
    uniqueNumbersCounter.push(getDivider(simpleArray[i]));
  }
  console.log('КОЛИЧЕСТВО ЧИСЕЛ(ДЕЛИТЕЛЬ): ', uniqueNumbersCounter)

  let minResult = [];
  for (let i = 0; i < result.length; i++) {
    minResult.push( result[i] / uniqueNumbersCounter[i] );
  }
  console.log('ОТВЕТ: ', Math.min.apply(null, minResult)^0);
  return Math.min.apply(null, minResult)^0;
  /* Через одно минимальное число */
  // let maxSimpleNumber = Math.max.apply(null, simpleArray);
  // console.log(`TEST: ${maxSimpleNumber}`);  
  // result.push(getSum(maxSimpleNumber));

  // console.log(`Массив суммы делений(result) = ${result}`);
    
  // const getDivider = (searchNumb) => {
  //   let counter = simpleBase.filter((item) => {
  //     return item == searchNumb;
  //   })
  //   return counter.length;
  // }
  // console.log("COUNTER: " + getDivider(maxSimpleNumber));
  // let devider = getDivider(maxSimpleNumber);
  // return (result[0]/devider);
  /* Через одно минимальное число */

}



  