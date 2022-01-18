import React, { useContext, useEffect, useState } from 'react'
import FormContent from './FormContent'
import Completed from './Completed'
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
    <div className='flex flex-col bg-cyan-200 p-10 w-1/2'>
      <div id='header' className='flex justify-end w-full'>
        <span>
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>
      <div className='p-4'>
        {questions.map((question, index) => {
          if (currentQuestion === index) {
            return <FormContent key={`answer-${index}`} question={question} />
          }

          return ''
        })}
      </div>
      <div className='p-4 flex justify-end w-full'>
        <button
          className='bg-slate-200 w-32'
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
