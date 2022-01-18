import React from 'react'

function CompletedFormContent (props) {
  const { question } = props
  return (
    <div className='text-2xl text-white p-4'>
      <p className={`completed-question-${question.id}`}>
        Question : {question.question}
      </p>
      <p className={`completed-answer-${question.answer.id}`}>
        Answer: {question.answer.text}
      </p>
    </div>
  )
}

export default CompletedFormContent
