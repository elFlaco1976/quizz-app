import React from 'react';
import { RESULT_NONE } from '../../utils/results';
import './styles.scss';

const ScoreBar = ({
  totalQuestions,
  currentQuestionIndex,
  correctAnswers,
  currentResult,
}) => {
  const answeredQuestions =
    currentQuestionIndex + (currentResult !== RESULT_NONE ? 1 : 0);
  const remainingQuestions = totalQuestions - answeredQuestions;

  const lowestPossibleScore = Math.round(
    (correctAnswers / totalQuestions) * 100
  );
  const score = Math.round(
    answeredQuestions === 0 ? 0 : (correctAnswers / answeredQuestions) * 100
  );
  const maxPossibleScore = Math.round(
    ((correctAnswers + remainingQuestions) / totalQuestions) * 100
  );

  const lowestScoreBarStyle = {
    height: '20px',
    width: `${lowestPossibleScore}%`,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 102,
  };
  const scoreBarStyle = {
    height: '20px',
    width: `${score}%`,
    backgroundColor: 'grey',
    position: 'absolute',
    zIndex: 101,
  };
  const maxPossibleScoreBarStyle = {
    height: '20px',
    width: `${maxPossibleScore}%`,
    backgroundColor: 'lightGrey',
    position: 'absolute',
    zIndex: 100,
  };
  return (
    <div className="container-score-bar-centered">
      <div className="container-score-bar">
        <div className="score-bar-labels">
          <span>{`Score: ${score}%`}</span>
          <span>{`Max Score: ${maxPossibleScore}%`}</span>
        </div>
        <div className="score-bar-graphs">
          <div style={lowestScoreBarStyle}></div>
          <div style={scoreBarStyle}></div>
          <div style={maxPossibleScoreBarStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
