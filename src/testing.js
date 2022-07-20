function polybius(input, encode = true) {
  if (input.length === 0) {
    return false;
  }

  if(!encode) { if (input.trim().length % 2 !=0) return false;}


  let workingCode = [];
  let space = ' ';
  const inputCode = input.toLowerCase();
  const cipherArray = [
    { row: 1, letter: "a", column: "1" },
    { row: 1, letter: "b", column: "2" },
    { row: 1, letter: "c", column: "3" },
    { row: 1, letter: "d", column: "4" },
    { row: 1, letter: "e", column: "5" },
    { row: 2, letter: "f", column: "1" },
    { row: 2, letter: "g", column: "2" },
    { row: 2, letter: "h", column: "3" },
    { row: 2, letter: "(i/j)", column: "4" },
    { row: 2, letter: "k", column: "5" },
    { row: 3, letter: "l", column: "1" },
    { row: 3, letter: "m", column: "2" },
    { row: 3, letter: "n", column: "3" },
    { row: 3, letter: "o", column: "4" },
    { row: 3, letter: "p", column: "5" },
    { row: 4, letter: "q", column: "1" },
    { row: 4, letter: "r", column: "2" },
    { row: 4, letter: "s", column: "3" },
    { row: 4, letter: "t", column: "4" },
    { row: 4, letter: "u", column: "5" },
    { row: 5, letter: "v", column: "1" },
    { row: 5, letter: "w", column: "2" },
    { row: 5, letter: "x", column: "3" },
    { row: 5, letter: "y", column: "4" },
    { row: 5, letter: "z", column: "5" },
  ];

  if (encode === true) {
    for (let i = 0; i < inputCode.length; i++) {
      let codeLetter = inputCode[i];
      if(codeLetter === ' ') { workingCode.push(codeLetter)}
      for (let j = 0; j < cipherArray.length; j++) {
        let { row, letter, column } = cipherArray[j];
        if (letter.includes(codeLetter)) {
          workingCode.push(`${column}${row}`);
        }
      }
    }
  } else {
    let count = 0
    for (let i = 0; i < inputCode.length; i++) {
        let codeNumber = inputCode[i]+inputCode[i+1];
  
        if(codeNumber === ' ') {
            workingCode.push(codeNumber)
        }

        for (let j = 0; j < cipherArray.length; j++) {
          let { row, letter, column } = cipherArray[j];
          if (codeNumber === `${column}${row}`) {
            workingCode.push(letter);
          }
        }
        console.log(workingCode)
        console.log(count)
      }


  }
  const codeFinish = workingCode.join("");
  return codeFinish;
}

console.log(polybius("42543444 4233 31113451", false));
