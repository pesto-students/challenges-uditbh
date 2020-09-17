function sumFibs(num) {
  let x = 1;      //first element
  let y = 1;      //second element
  let oddFibsSum = 1;

  while (y <= num) {
    if (y % 2 === 1) {
      oddFibsSum += y;
    }
    const fibsPrevEle = y;
    y = x + y;
    x = fibsPrevEle;
  }
  return oddFibsSum;
}

function cacheFunction(sumFibs) {
  let cache = {};
  return (n) => {
    if (cache[n] === undefined) {
      cache[n] = sumFibs(n);
    }
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
