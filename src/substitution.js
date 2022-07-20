// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    if (alphabet.length != 26) {
      return false;
    }
   

    // Definining the input string as lower case
    const inputString = input.toLowerCase();
    // Setting the alphabet string as a lower case array
    const lowerCodeArray = alphabet.toLowerCase().split("");
    // console.log("lowerCodeArray: ", lowerCodeArray);

    // Using new Set() to remove duplicats from the lowerCodeArray to make sure there are non
    // console.log(new Set(lowerCodeArray));
    if(new Set(lowerCodeArray).size != 26){
      return false
    }


    // Setting the base alphabet array
    const lowerBaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // console.log("lowerBaseArray: ", lowerBaseArray);
    const codeArray = [];


    // if encode is true, this will encode by checking the input against the lowerBaseArray then output the lowerCodeArray result
    if (encode) {
      for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt([i]) === 32) {
          codeArray.push(input[i]);
        }
        let orgLetter = inputString[i];
        for (let j = 0; j < lowerBaseArray.length; j++) {
          if (orgLetter === lowerBaseArray[j]) {
            codeArray.push(lowerCodeArray[j]);
            // console.log('codeArray-encode: ' codeArray)
          }
        }
      }
      // if encode is false (or decoding), this will decode by checking the input against the lowerCodeArray and outputing the lowerBaseArray result
    } else {
      for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt([i]) === 32) {
          codeArray.push(input[i]);
        }
        let orgLetter = inputString[i];
        for (let j = 0; j < lowerCodeArray.length; j++) {
          if (orgLetter === lowerCodeArray[j]) {
            codeArray.push(lowerBaseArray[j]);
            // console.log('codeArray-decode: ' codeArray)
          }
        }
      }
    }

    // console.log('codeArray: ', codeArray)
    const finalOutput = codeArray.join("");
    // console.log(finalOutput)
    return finalOutput;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
