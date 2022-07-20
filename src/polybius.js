// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  // This function creates a polyius cipher which conversts a letter into a pair of numbers or a pair of numbers into a letter based on a grid
  // For this version, a cipherArray is created to hold all the cipher values
  // This function takes in an input of a string of letters or double numbers.  If it is to be decoded it also takes in a false
  function polybius(input, encode = true) {

    // Check if the input is empty
    if (input.length === 0) {
      return false;
    }

    // Convert the input into an array with no spaces to verify that it is an even number since the code relies on double digits
    const noSpace = input.split(" ").join("");
    if (!encode) {
      if (noSpace.length % 2 != 0) {
        return false;
      }
    }

    // Created a workingCode array to hold the iterations, converted the input into lowercase, and established the cipherArray to hold all the values with (i/j) as the same
    let workingCode = [];
    const inputCode = input.toLowerCase();
    const cipherArray = [
      { row: 1, letter: "a", column: 1 },{ row: 1, letter: "b", column: 2 },{ row: 1, letter: "c", column: 3 },{ row: 1, letter: "d", column: 4 },{ row: 1, letter: "e", column: 5 },
      { row: 2, letter: "f", column: 1 },{ row: 2, letter: "g", column: 2 },{ row: 2, letter: "h", column: 3 },{ row: 2, letter: "(i/j)", column: 4 },{ row: 2, letter: "k", column: 5 },
      { row: 3, letter: "l", column: 1 },{ row: 3, letter: "m", column: 2 },{ row: 3, letter: "n", column: 3 },{ row: 3, letter: "o", column: 4 },{ row: 3, letter: "p", column: 5 },
      { row: 4, letter: "q", column: 1 },{ row: 4, letter: "r", column: 2 },{ row: 4, letter: "s", column: 3 },{ row: 4, letter: "t", column: 4 },{ row: 4, letter: "u", column: 5 },
      { row: 5, letter: "v", column: 1 },{ row: 5, letter: "w", column: 2 },{ row: 5, letter: "x", column: 3 },{ row: 5, letter: "y", column: 4 },{ row: 5, letter: "z", column: 5 },
    ];


    // If the cipher is en encode, it iterates through the inputCode array and returns the column and row values as a two digit number
    if (encode === true) {
      for (let i = 0; i < inputCode.length; i++) {
        let codeLetter = inputCode[i];
        if (codeLetter === " ") {                       // This if statement checks for spaces and adds them
          workingCode.push(codeLetter);
        }
        for (let j = 0; j < cipherArray.length; j++) {  // If there is no space, it iterates through the rest of the values and returns the two digit number
          let { row, letter, column } = cipherArray[j];
          if (letter.includes(codeLetter)) {
            workingCode.push(`${column}${row}`);
          }
        }
      }
    } else {                                            // If the cipher is decode, it will iterate through the inputCode array and return the alphabet value
      let i = 0;
      for (let i = 0; i < inputCode.length; i) {
        if (inputCode.charCodeAt([i]) === 32) {         // This if statement checks for spaces, adds them and adds 1 to the counter for iteration
          workingCode.push(inputCode[i]);
          i++;
        }
        let codeNumber = inputCode[i] + inputCode[i + 1];
        for (let j = 0; j < cipherArray.length; j++) {  // This if statement iterates through the cipherArray
          let { row, letter, column } = cipherArray[j]; // and compares the two digit input number returning the letter, and adds 2 to the counter for iteration
          if (codeNumber === `${column}${row}`) {
            workingCode.push(letter);
            i += 2;
          }
        }
      }
    }
    const codeFinish = workingCode.join("");            // This converts the array back into a string
    return codeFinish;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
