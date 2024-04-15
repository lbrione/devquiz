console.log('sii')

// import { glideText } from '../../src/services/glideText/glideText.js'

// const $ = (selector, context = document) => context.querySelector(selector)

// const questions = JSON.parse($('div[data-json]').dataset.json)
// const $counter = $('.quiz-counter')
// const $question = $('.quiz-question')
// const $options = $('.quiz-options')


// console.log($question.textContent)


// let currentQuestion = 0

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

// // Events section
// $options.addEventListener('click', () => {

// })


// document.addEventListener('load', () => {
//   console.log('si')
// })