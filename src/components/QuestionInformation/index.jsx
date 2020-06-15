import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'

const QuestionInformation = ({
  questionData,
  totalQuestions,
  currentQuestionIndex,
  gameType
}) => {
  return (
    <div className='container-information container-padded'>
      <h1>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</h1>
      <p className='game-type'>{gameType}</p>
      <div className='info-difficulty'>
        <FontAwesomeIcon
          style={{ color: 'black' }}
          className='difficulty-icons'
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{
            color:
              questionData.difficulty === 'medium' ||
              questionData.difficulty === 'hard'
                ? 'black'
                : 'lightgray'
          }}
          className='difficulty-icons'
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{
            color: questionData.difficulty === 'hard' ? 'black' : 'lightgray'
          }}
          className='difficulty-icons'
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ color: 'lightgray' }}
          className='difficulty-icons'
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ color: 'lightgray' }}
          className='difficulty-icons'
          icon={faStar}
        />
      </div>
      <p className='question-text'>{questionData.questionText}</p>
    </div>
  )
}

export default QuestionInformation
