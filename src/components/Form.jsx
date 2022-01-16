import React, { useContext } from 'react'
import FormContent from './FormContent'
import FormContext from '../store/form-context'
function Form (props) {
  const { questions } = useContext(FormContext)
  console.log(questions)
  return (
    <div className='flex flex-col bg-cyan-200'>
      <div className='flex justify-end w-full'>
        <span>0 / {questions.length} </span>
      </div>
      <div>
        {questions.map((question, index) => (
          <FormContent
            key={`answer-${index}`}
            answers={question.answers}
            selectedAnswer={(element, answer) => {
              const questionId = index
              props.selectedAnswer(element, answer, questionId)
            }}
          />
        ))}
      </div>
      <div>
        <p>asdasdifj dsaipfjas asmdfasşodf asdf sadf asdf</p>
      </div>
    </div>
  )
}

export default Form
