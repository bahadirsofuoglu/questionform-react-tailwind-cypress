import React, { useContext, useEffect, useState } from 'react'
import FormContent from './FormContent'
import Completed from './CompletedForm'
import FormContext from '../store/form-context'

function Form () {
  const { questions } = useContext(FormContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [buttonText, setButtonText] = useState('Next Question')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setDisabled(checkDisabled)
  })

  const onClickButton = () => {
    currentQuestion < questions.length
      ? setCurrentQuestion(currentQuestion + 1)
      : setButtonText('Completed')
  }

  const checkDisabled = () => {
    return !questions[currentQuestion]?.answers.some(x => x.checked === true)
  }

  if (currentQuestion === 2) {
    return <Completed></Completed>
  }

  return (
    <div className='flex flex-col bg-indigo-400 b p-10 w-1/2 rounded-xl'>
      <div id='header' className='flex justify-end w-full text-2xl text-white '>
        <span>
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>
      <div className='p-4 '>
        {questions.map((question, index) => {
          if (currentQuestion === index) {
            return <FormContent key={`answer-${index}`} question={question} />
          }

          return ''
        })}
      </div>
      <div className='p-4 flex justify-end w-full'>
        <button
          className='w-52 h-14 rounded-full text-xl border-white border-4 bg-indigo-400 text-white font-semibold'
          disabled={disabled}
          onClick={onClickButton}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Form
