// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // This function creates a caesar cipher.  It will take in the input, a numerical shift value, and if decoding a false.
  // It will shift each letter of the input left or right (depending on shift) and return a new encoded or decoded string.
  function caesar(input, shift, encode = true) {

    // Make sure the input is lower case and defining the working coding variable as an array
    const codeStart = input.toLowerCase();
    const codingArray = [];

    // checking the shift to make sure it is in the right range
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }

    // if the encode is false, it is a decode so the shift needs to go the other way
    if (encode === false) {
      shift *= -1;
    }

    //this for loop iterates through the string and converts it to a number,
    //then shifts, then converts it back.
    for (let i = 0; i < codeStart.length; i++) {
      let partial = codeStart.charCodeAt([i]);
      if (partial < 97) {                 //handles if the value is a special char or space
        codingArray.push(partial);
      } else if (partial + shift > 122) { // if the shift takes the letters above z, subtract 26 so they wrap to a
        partial -= 26;
        codingArray.push(partial + shift);
        } else if (partial + shift < 97) {// if the shift takes the letters below a, add 26 so they wrap to z
        partial += 26;
        codingArray.push(partial + shift);
      } else {                            // add the shift to the remaining values (should be a through z)
        codingArray.push(partial + shift);
      }
    }

    // convert the codingArray codes into the alphabet again and return it as a string
    const codeFinish = String.fromCharCode(...codingArray);

    return codeFinish;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
