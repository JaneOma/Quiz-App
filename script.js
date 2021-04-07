const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')

    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [{
        question: 'Those things made by human beings are called?',
        answers: [
            { text: 'beautiful things', correct: false },
            { text: 'artificial things', correct: true },
            { text: 'natural things', correct: false },
            { text: 'non natural things', correct: false }

        ]
    },

    {
        question: 'Which part of the plant produces seeds and fruits?',
        answers: [
            { text: 'fruits', correct: false },
            { text: 'flowers', correct: true },
            { text: 'stem', corect: false },
            { text: 'petal', correct: false }
        ]
    },
    {
        question: 'Diseases people get from polluted water are called?',
        answers: [
            { text: 'air borne', correct: false },
            { text: 'sexually transmitted', correct: false },
            { text: 'water borne', correct: true },
            { text: 'malaria', correct: false }
        ]
    },

    {
        question: 'Which of these is a sense organ in human beings?',
        answers: [
            { text: 'skin', correct: true },
            { text: 'mouth', correct: false },
            { text: 'hair', correct: false },
            { text: 'feet', correct: false }

        ]
    },

    {
        question: 'Types of Habitat includes all except?',
        answers: [
            { text: 'land', correct: false },
            { text: 'aboreal', correct: false },
            { text: 'cloudy', correct: true },
            { text: 'aquatic', correct: false }

        ]
    },

    {
        question: 'A particular place where a plant or animal lives is known as?',
        answers: [
            { text: 'surrounding', correct: false },
            { text: 'house', correct: false },
            { text: 'society', correct: false },
            { text: 'habitat', correct: true }

        ]
    },

    {
        question: 'One of these is not the benefit of science?',
        answers: [
            { text: 'drug manufacturing', correct: false },
            { text: 'food production', correct: false },
            { text: 'disease', correct: true },
            { text: 'technology', correct: false }

        ]
    },

    {
        question: 'What covers the body of a Lizard?',
        answers: [
            { text: 'hair', correct: false },
            { text: 'scales', correct: true },
            { text: 'feathers', correct: false },
            { text: 'shells', correct: false }

        ]
    },

    {
        question: 'A person who has good knowledge of science and makes researches to achieve greater results is known as?',
        answers: [
            { text: 'A scientist', correct: true },
            { text: 'A farmer', correct: false },
            { text: 'A teacher', correct: false },
            { text: 'A musician', correct: false }

        ]
    },

    {
        question: 'A Spider has how many legs?',
        answers: [
            { text: '4', correct: false },
            { text: '10', correct: false },
            { text: '5', correct: false },
            { text: '8', correct: true }

        ]
    },

    {
        question: 'Which type of object attracts or pulls other metals objects?',
        answers: [
            { text: 'metals', correct: false },
            { text: 'magnet', correct: true },
            { text: 'gum', correct: false },
            { text: 'paper tape', correct: false }

        ]
    },

    {
        question: 'The ability to do work is called?',
        answers: [
            { text: 'energy', correct: true },
            { text: 'position', correct: false },
            { text: 'change', correct: false },
            { text: 'work', correct: false }

        ]
    },

    {
        question: 'An area of darkness created when source of light is blocked is known as?',
        answers: [
            { text: 'darkness', correct: false },
            { text: 'shadow', correct: true },
            { text: 'image', correct: false },
            { text: 'mirror', correct: false }

        ]
    },

    {
        question: 'What forms pictures in the sky called constellations?',
        answers: [
            { text: 'moon', correct: false },
            { text: 'sun', correct: false },
            { text: 'stars', correct: true },
            { text: 'earth', correct: false }

        ]
    },

    {
        question: 'How many years does it take the earth to make a complete trip around the sun?',
        answers: [
            { text: 'two years', correct: false },
            { text: 'five years', correct: false },
            { text: 'three years', correct: false },
            { text: 'one year', correct: true }

        ]
    },

    {
        question: 'The primary source of energy is?',
        answers: [
            { text: 'solar', correct: true },
            { text: 'chemical', correct: false },
            { text: 'electrical', correct: false },
            { text: 'potential', correct: false }

        ]
    },

    {
        question: 'Any sound unpleasant to the ear is called?',
        answers: [
            { text: 'music', correct: false },
            { text: 'lyrics', correct: false },
            { text: 'dance', correct: false },
            { text: 'noise', correct: true }

        ]
    }

]