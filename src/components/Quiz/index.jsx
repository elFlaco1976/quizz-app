import React from 'react'
import shuffle from 'lodash.shuffle'
import questionsData from '../../data/questions.json'
import Question from '../Question'
import {
  RESULT_NONE,
  RESULT_INCORRECT,
  RESULT_CORRECT
} from '../../utils/results'
import './styles.scss'

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      correctAnswers: 0,
      currentResult: RESULT_NONE,
      answerSelected: null,
      isGameFinished: false
    }
  }

  handleNextButton = () => {
    this.setState((prevState) => {
      return {
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        currentResult: RESULT_NONE,
        answerSelected: null
      }
    })
  };

  handleAnswerButton = (answer) => {
    const { questions, currentQuestionIndex, currentResult } = this.state
    const currentQuestion = questions[currentQuestionIndex]
    const answerIsCorrect = answer === currentQuestion.correctAnswer
    if (currentResult !== RESULT_NONE) {
      return
    }
    const isGameFinished = currentQuestionIndex + 1 === questions.length

    this.setState((prevState) => {
      return {
        currentResult: answerIsCorrect ? RESULT_CORRECT : RESULT_INCORRECT,
        answerSelected: answer,
        correctAnswers: answerIsCorrect
          ? prevState.correctAnswers + 1
          : prevState.correctAnswers,
        isGameFinished
      }
    })
  };

  componentDidMount () {
    const questions = questionsData.map((question) => {
      const correctAnswer = decodeURIComponent(question.correct_answer)
      const incorrectAnswers = question.incorrect_answers.map((a) =>
        decodeURIComponent(a)
      )
      return {
        category: decodeURIComponent(question.category),
        correctAnswer,
        questionText: decodeURIComponent(question.question),
        questionType: question.type,
        difficulty: question.difficulty,
        allAnswers: shuffle([correctAnswer, ...incorrectAnswers])
      }
    })
    this.setState({ questions })
  }

  render () {
    const {
      questions,
      currentQuestionIndex,
      currentResult,
      correctAnswers,
      answerSelected,
      isGameFinished
    } = this.state

    return (
      <div className='quiz-container'>
        {questions.length > 0 && (
          <Question
            questionData={questions[currentQuestionIndex]}
            handleNextButton={this.handleNextButton}
            handleAnswerButton={this.handleAnswerButton}
            totalQuestions={questions.length}
            currentQuestionIndex={currentQuestionIndex}
            currentResult={currentResult}
            correctAnswers={correctAnswers}
            answerSelected={answerSelected}
            isGameFinished={isGameFinished}
          />
        )}
      </div>
    )
  }
}

export default Quiz
