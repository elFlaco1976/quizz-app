import React from 'react'
import { RESULT_NONE } from '../../utils/results'
import './styles.scss'

const ScoreBar = ({
  totalQuestions,
  currentQuestionIndex,
  correctAnswers,
  currentResult
}) => {
  const scoreInfo = getScoreCalculations({
    totalQuestions,
    currentQuestionIndex,
    correctAnswers,
    currentResult
  })

  const lowestScoreBarStyle = {
    height: '20px',
    width: `${scoreInfo.lowestPossibleScore}%`,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 102
  }
  const scoreBarStyle = {
    height: '20px',
    width: `${scoreInfo.score}%`,
    backgroundColor: 'grey',
    position: 'absolute',
    zIndex: 101
  }
  const maxPossibleScoreBarStyle = {
    height: '20px',
    width: `${scoreInfo.maxPossibleScore}%`,
    backgroundColor: 'lightGrey',
    position: 'absolute',
    zIndex: 100
  }
  return (
    <div className='container-score-bar-centered'>
      <div className='container-score-bar'>
        <div className='score-bar-labels'>
          <span>{`Score: ${scoreInfo.score}%`}</span>
          <span>{`Max Score: ${scoreInfo.maxPossibleScore}%`}</span>
        </div>
        <div className='score-bar-graphs'>
          <div style={lowestScoreBarStyle} />
          <div style={scoreBarStyle} />
          <div style={maxPossibleScoreBarStyle} />
        </div>
      </div>
    </div>
  )
}

const getScoreCalculations = ({
  totalQuestions,
  currentQuestionIndex,
  correctAnswers,
  currentResult
}) => {
  const answeredQuestions =
  currentQuestionIndex + (currentResult !== RESULT_NONE ? 1 : 0)
  const remainingQuestions = totalQuestions - answeredQuestions
  const lowestPossibleScore = Math.round(
    (correctAnswers / totalQuestions) * 100
  )
  const score = Math.round(
    answeredQuestions === 0 ? 0 : (correctAnswers / answeredQuestions) * 100
  )
  const maxPossibleScore = Math.round(
    ((correctAnswers + remainingQuestions) / totalQuestions) * 100
  )

  return { lowestPossibleScore, score, maxPossibleScore }
}

export default ScoreBar
