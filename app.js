// app.js
// this code challenge is to create a function which capitalises the first letter of a string, and returns the capitalised word

function capitaliseWord(word) {
  console.log("hello world");
  console.log(word);

  const firstLetter = word.charAt(0);
  console.log("character position 0 is"), firstLetter;

  const remaniningLetters = word.substring(1);
  console.log("remaning letters are", remaniningLetters);

  const firstLetterUpperCase = firstLetter.topUpperCase();
  console.log("uppercased letter is", firstLetterUpperCase);

  //console.log("whole word is", firstLetterUpperCase + remaniningLetters);

  console.log("--------------");

  return firstLetterUpperCase + remaniningLetters;
}
console.log(capitaliseWord("mousetrap"));
capitaliseWord("building");
