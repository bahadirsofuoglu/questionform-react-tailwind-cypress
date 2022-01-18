import React, { useContext } from 'react'
import FormContext from '../store/form-context'

function Checkbox (props) {
  const { selectedAnswer } = useContext(FormContext)
  const checkboxHandler = event => {
    selectedAnswer(props, event.target.checked)
  }

  return (
    <div className='p-4'>
      <label className='inline-flex items-center'>
        <input
          name={`answer-${props.changedAnswer.id}`}
          type='checkbox'
          className='w-6 h-6 rounded'
          checked={props.changedAnswer.checked}
          onChange={checkboxHandler}
        />
        <span className='ml-2'>{props.changedAnswer.text}</span>
      </label>
    </div>
  )
}

export default Checkbox
