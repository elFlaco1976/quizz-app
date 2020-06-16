import React from 'react'
import OverallBar from '../OverallBar'
import QuestionInformation from '../QuestionInformation'
import AnswersMultiple from '../AnswersMultiple'
import QuestionStatus from '../QuestionStatus'
import ScoreBar from '../ScoreBar'
import './styles.scss'

const Question = ({
  questionData,
  handleNextButton,
  handleAnswerButton,
  totalQuestions,
  currentQuestionIndex,
  currentResult,
  correctAnswers,
  answerSelected,
  isGameFinished
}) => {
  return (
    <div className='container-question'>
      <OverallBar
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <QuestionInformation
        questionData={questionData}
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <AnswersMultiple
        questionData={questionData}
        currentResult={currentResult}
        handleAnswerButton={handleAnswerButton}
        answerSelected={answerSelected}
      />
      <QuestionStatus
        handleNextButton={handleNextButton}
        currentResult={currentResult}
        isGameFinished={isGameFinished}
      />
      <ScoreBar
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
        correctAnswers={correctAnswers}
        currentResult={currentResult}
      />
    </div>
  )
}

export default Question
