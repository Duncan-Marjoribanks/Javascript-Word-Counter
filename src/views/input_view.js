const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

}

InputView.prototype.takeInput = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedText = document.querySelector('#text');
    PubSub.publish('InputView:text-submitted', inputtedText);
  });
};

module.exports = InputView;
