function lastIndexOf(...args) {
  const key = args[0];
  const arr = args[1];
  if (arr.includes(key)) {
    for (let i = arr.length - 1; i => 0; i--) {
      if (arr[i] === key) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

export {
  lastIndexOf,
};
