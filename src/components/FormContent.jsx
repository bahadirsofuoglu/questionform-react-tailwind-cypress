import React from 'react'
import Checkbox from './Checkbox'
function FormContent (props) {
  const { answers } = props

  return (
    <div>
      {answers.map((answer, index) => (
        <Checkbox
          key={`answer-${index}`}
          text={answer.text}
          checked={answer.checked}
          selectedAnswer={(element, answer) => {
            props.selectedAnswer(element, answer)
          }}
        />
      ))}
    </div>
  )
}

export default FormContent
