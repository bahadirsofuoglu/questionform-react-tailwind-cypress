import React, { useContext } from 'react'
import FormContext from '../store/form-context'
import CompletedFormContent from './CompletedFormContent'
function Completed () {
  const { questions } = useContext(FormContext)
  return (
    <div className='flex flex-col bg-indigo-400 b p-10 w-1/2 rounded-xl'>
      {questions.map((question, index) => {
        return (
          <CompletedFormContent
            key={index}
            question={question}
          ></CompletedFormContent>
        )
      })}
    </div>
  )
}

export default Completed
