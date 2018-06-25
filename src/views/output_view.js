const PubSub = require('../helpers/pub_sub.js');

const OutputView = function() {

};

OutputView.prototype.giveOutputWords = function () {
  PubSub.subscribe('WordCounter:words-result', (event) => {
    const numberOfWords = event.detail;
    console.log(numberOfWords);
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `You wrote ${numberOfWords} words`;
  });
};

OutputView.prototype.giveOutputLetters = function () {
  PubSub.subscribe('WordCounter:letters-result', (event) => {
    const numberOfLetters = event.detail;
    console.log(event);
    const hook = document.querySelector('#result');
    const lettersInInput = document.createElement('h2')
    lettersInInput.textContent = `This has ${numberOfLetters} letters`;
    console.log(lettersInInput);
    hook.appendChild(lettersInInput);
  });
}



module.exports = OutputView;
