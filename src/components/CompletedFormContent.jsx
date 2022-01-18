import React from 'react'

function CompletedFormContent (props) {
  const { question, currentIndex } = props

  return (
    <div className='text-2xl text-white p-4'>
      <p id={`completed-question-${currentIndex}`}>
        Question : {question.question}
      </p>
      <p id={`completed-answer-${currentIndex}`}>
        Answer: {question.answer.text}
      </p>
    </div>
  )
}

export default CompletedFormContent
