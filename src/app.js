const InputView = require('./views/input_view.js');
const OutputView = require('./views/output_view.js');
const WordCounter = require('./models/word_counter.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const inputView = new InputView();
inputView.takeInput();

const wordCounter = new WordCounter();
wordCounter.countWords();
wordCounter.countLetters();

const outputView = new OutputView();
outputView.giveOutputWords();
outputView.giveOutputLetters();

});
