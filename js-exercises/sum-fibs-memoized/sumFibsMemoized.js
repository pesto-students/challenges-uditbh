function sumFibs(num) {
  const fibs = [1, 1];
  let oddFibsSum = 2;
  while (oddFibsSum < num) {
    const fibEle = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    if (fibEle < num) {
      fibs.push(fibEle);
      if ((fibEle % 2) !== 0) {
        oddFibsSum += fibEle;
      }
    }
  }
  return oddFibsSum;
}

function cacheFunction(sumFibs) {
  const cache = {};
  return (n) => {
    if (cache[n] === undefined) {
      cache[n] = sumFibs[n];
    }
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
