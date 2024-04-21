
// function setQuestion() {
//   glideText('.progress-number', currentQuestion+1)
//   glideText('.question', questions[currentQuestion].question)

//   Array.from($options.children).forEach((elem, i) => {
//     glideText(elem, questions[currentQuestion].options[i])
//     elem.classList.remove('correct', 'incorrect')
//   })
// }

// function checkOption({target}) {
//   if (target.tagName !== 'BUTTON') return

//   if (target.textContent === questions[currentQuestion].correctAnswer) {
//     target.classList.add('correct')
//   }
//   else {
//     target.classList.add('incorrect')
//   }

//   currentQuestion++

//   setTimeout(() => {
//     if (currentQuestion === questions.length) {
//       $quizQuestion.classList.add('hide-question')
//       $quizResults.classList.add('show-results')
//       return
//     }
//     setQuestion()
//   }, 1500)
// }
