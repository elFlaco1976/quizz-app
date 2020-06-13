import React from 'react';
import { Button } from 'reactstrap';
import {
  RESULT_NONE,
  RESULT_INCORRECT,
  RESULT_CORRECT,
} from '../../utils/results';
import './styles.scss';

const getResultText = (result) => {
  if (result === RESULT_INCORRECT) {
    return 'Sorry!';
  } else if (result === RESULT_CORRECT) {
    return 'Correct!';
  }
  return '';
};

const QuestionStatus = ({
  handleNextButton,
  currentResult,
  isGameFinished,
}) => {
  return (
    <div className="container-question-status container-padded">
      <p className="result-text">{getResultText(currentResult)}</p>
      {currentResult !== RESULT_NONE && !isGameFinished && (
        <Button
          onClick={handleNextButton}
          style={{ background: 'lightgrey', color: 'black' }}
        >
          Next Question
        </Button>
      )}
    </div>
  );
};

export default QuestionStatus;
