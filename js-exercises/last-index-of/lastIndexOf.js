function lastIndexOf(arg1, arg2) {
  const key = arg1;
  const arr = arg2;
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
