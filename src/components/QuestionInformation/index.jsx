import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import difficultyLevels from '../../utils/difficultyLevels'
import './styles.scss'

const QuestionInformation = ({
  questionData,
  totalQuestions,
  currentQuestionIndex
}) => {
  return (
    <div className='container-information container-padded'>
      <h1>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</h1>
      <p className='question-category'>{questionData.category}</p>
      <div className='info-difficulty'>
        {getDifficultyStars(questionData.difficulty)}
      </div>
      <p className='question-text'>{questionData.questionText}</p>
    </div>
  )
}

const getDifficultyStars = (difficulty) => {
  const difficultyLevel = difficultyLevels[difficulty]
  const difficultyStars = []
  for (let index = 0; index < difficultyLevel; index++) {
    difficultyStars.push(<FontAwesomeIcon
      style={{ color: 'black' }}
      className='difficulty-icons'
      icon={faStar}
    />)
  }
  for (let index = difficultyLevel; index < 5; index++) {
    difficultyStars.push(<FontAwesomeIcon
      style={{ color: 'lightgray' }}
      className='difficulty-icons'
      icon={faStar}
    />)
  }
  return (<>
    { difficultyStars }
  </>)
}

export default QuestionInformation
