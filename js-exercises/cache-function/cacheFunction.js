function cacheFunction(cb) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = cb(n);
      cache[n] = result;
      return cache[n];
    }
  }
}

export {
  cacheFunction,
};
