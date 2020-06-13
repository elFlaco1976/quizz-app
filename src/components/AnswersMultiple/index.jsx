import React from 'react';
import { Button } from 'reactstrap';
import './styles.scss';
import { RESULT_NONE, RESULT_INCORRECT } from '../../utils/results';

const getResultButtonStyle = (
  correctAnswer,
  answer,
  result,
  answerSelected
) => {
  const styleButtonNoAnswer = {
    backgroundColor: 'lightgrey',
    color: 'black',
  };
  const styleButtonCorrectAnswer = {
    backgroundColor: 'black',
    color: 'white',
  };
  const styleButtonIncorrectAnswerSelected = {
    backgroundColor: 'white',
    color: 'black',
  };
  const styleButtonIncorrectAnswer = {
    backgroundColor: '#f5f5f5',
    color: 'grey',
  };
  if (result === RESULT_NONE) {
    return styleButtonNoAnswer;
  } else if (correctAnswer === answer) {
    return styleButtonCorrectAnswer;
  } else if (result === RESULT_INCORRECT && answer === answerSelected) {
    return styleButtonIncorrectAnswerSelected;
  }
  return styleButtonIncorrectAnswer;
};

const AnswersMultiple = ({
  questionData,
  currentResult,
  handleAnswerButton,
  answerSelected,
}) => {
  const answers = [
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ];
  return (
    <div className="answers-container container-padded">
      {answers.map((a) => {
        const resultButtonStyle = getResultButtonStyle(
          questionData.correctAnswer,
          a,
          currentResult,
          answerSelected
        );

        return (
          <Button
            className="answer-button"
            style={resultButtonStyle}
            size="sm"
            onClick={() => handleAnswerButton(a)}
          >
            {a}
          </Button>
        );
      })}
    </div>
  );
};

export default AnswersMultiple;
