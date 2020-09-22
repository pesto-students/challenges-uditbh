function rot13(...args) {
  args = args[0];
  let decryptedString = "";
  for (let i = 0; i < args.length; i++) {
    let asciiCode = args[i].charCodeAt();
    if (asciiCode <= 90 && asciiCode >= 65) {
      decryptedString += rotDecode(asciiCode);
    } else {
      decryptedString += args[i];
    }
  }
  return decryptedString;
}

function rotDecode(asciiCode) {
  let places = 13;
  if (asciiCode >= (65 + places)) {
    asciiCode -= places;
  } else {
    asciiCode += places;
  }
  return String.fromCharCode(asciiCode);
}

export {
  rot13,
};
