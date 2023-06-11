const caesarCipher = (word, shiftFactor) => {
  let encrypted = "";

  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (!letter.match(/[a-z]/i)) {
      encrypted += letter;
      continue;
    }
    for (let x = 0; x < shiftFactor; x++) {
      if (letter == "z") letter = "a";
      //Had to google String.fromCharCode. Seems weird? Problem wouldn't exist in strongly typed languages where it would just increment char by 1
      //but JavaScript is stupid and types everything itself?? Issue would fix itself in TypeScript.
      else letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    encrypted += letter;
  }
  return encrypted;
};
export default caesarCipher;
