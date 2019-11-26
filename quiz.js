let questions = [
  ['What color is the sky?', 'blue'],
  ['How many states are there?', '50'],
  ['What is my cat\'s name?', 'pemba']
  ];
  let correctCount = 0;
  let correctQuestions = '';
  let wrongCount=0;
  let wrongQuestions = '';
let hmtl = '';

for (let i = 0; i < questions.length; i += 1) {

 let answer = prompt(questions[i][0])
 answer = answer.toLowerCase();

  if (answer == questions[i][1]) {
    correctCount += 1;
    correctQuestions +='<li>' + questions[i][0] + '</li>';
  } else {
    wrongCount += 1;
    wrongQuestions += '<li>' + questions[i][0] + '</li>';

  };

};

  html = '<h2>You got ' + correctCount + ' question(s) correct.</h2>';

  if (correctCount >= 1 ) {
    html += '<h3>Here are the questions you answered correctly: <h3>';
    html += '<ol>' + correctQuestions + '</ol>';
  }

  html += '<h2>You got ' + wrongCount + ' question(s) incorrect.</h2>';

  if (wrongCount >= 1 ) {
   html += '<h3>Here are the questions you answered incorrectly: <h3>';
    html += '<ol>' + wrongQuestions + '</ol>';
  }

function print(message) {
  let content = document.getElementById('output');
  content.innerHTML = message;
}

print(html);
