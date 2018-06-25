const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function() {

};

WordCounter.prototype.countWords = function () {
  PubSub.subscribe('InputView:text-submitted', (event) => {
    const inputtedText = event.detail.value;
    const numberOfWords = this.countString(inputtedText);
    const numberOfLetters = this.countLetters(inputtedText);
    console.log(numberOfWords);
    PubSub.publish('WordCounter:words-result', numberOfWords);

  });
};

  WordCounter.prototype.countString = function(stringObject) {
    const wordsArray = stringObject.split(" ");
    const finalWordsCount = wordsArray.length;
    console.log(wordsArray);
    console.log(finalWordsCount);
    return finalWordsCount;
  };

  WordCounter.prototype.countLetters = function () {
    PubSub.subscribe('InputView:text-submitted', (event) => {
      const inputtedText = event.detail.value;
      const numberOfLetters = this.lettersCount(inputtedText);
      console.log(numberOfLetters);
      PubSub.publish('WordCounter:letters-result', numberOfLetters);
    });
  };

  WordCounter.prototype.lettersCount = function(stringObject) {
    const letterCount = stringObject.length;
    return letterCount;
  };



module.exports = WordCounter;
