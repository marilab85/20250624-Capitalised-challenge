function capitaliseSentence(sentence) {
  console.log(sentence);

  console.log(sentence.charAt(0).topUpperCase() + sentence.substring(1));
  const words = sentence.split("");
  console.log(words);
}

capitaliseSentence(
  "hello digital innovators three. hope you are having a great day"
);
