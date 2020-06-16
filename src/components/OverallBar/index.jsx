import React from 'react'
import './styles.scss'

export default function OverallBar ({ totalQuestions, currentQuestionIndex }) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100
  const barStyle = {
    height: '13px',
    width: `${progress}%`,
    backgroundColor: 'grey'
  }
  return <div style={barStyle} />
}
