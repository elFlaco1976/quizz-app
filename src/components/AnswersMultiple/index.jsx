import React from 'react'
import { Button } from 'reactstrap'
import { RESULT_NONE, RESULT_INCORRECT } from '../../utils/results'
import './styles.scss'

export default function AnswersMultiple ({
  questionData,
  currentResult,
  handleAnswerButton,
  answerSelected
}) {
  let answers = questionData.allAnswers
  return (
    <div className='answers-container container-padded'>
      {answers.map((answer, index) => {
        const resultInfo = {
          correctAnswer: questionData.correctAnswer,
          answer,
          currentResult,
          answerSelected
        }
        const resultButtonStyle = getButtonStyleFromResult(
          resultInfo
        )

        return (
          <Button
            className='answer-button'
            style={resultButtonStyle}
            size='sm'
            onClick={() => handleAnswerButton(answer)}
            key={index}
          >
            {answer}
          </Button>
        )
      })}
    </div>
  )
}

const getButtonStyleFromResult = (
  resultInfo
) => {
  const styleButtonNoAnswer = {
    backgroundColor: 'lightgrey',
    color: 'black'
  }
  const styleButtonCorrectAnswer = {
    backgroundColor: 'black',
    color: 'white'
  }
  const styleButtonIncorrectAnswerSelected = {
    backgroundColor: 'white',
    color: 'black'
  }
  const styleButtonIncorrectAnswer = {
    backgroundColor: '#f5f5f5',
    color: 'grey'
  }
  if (resultInfo.currentResult === RESULT_NONE) {
    return styleButtonNoAnswer
  } else if (resultInfo.correctAnswer === resultInfo.answer) {
    return styleButtonCorrectAnswer
  } else if (resultInfo.currentResult === RESULT_INCORRECT && resultInfo.answer === resultInfo.answerSelected) {
    return styleButtonIncorrectAnswerSelected
  }
  return styleButtonIncorrectAnswer
}
