import React from 'react'

function CompletedFormContent (props) {
  return (
    <div className='text-2xl text-white p-4'>
      <p>Question : {props.question.question}</p>
      <p className='mt-2'>Answer: {props.question.answer.text}</p>
    </div>
  )
}

export default CompletedFormContent
