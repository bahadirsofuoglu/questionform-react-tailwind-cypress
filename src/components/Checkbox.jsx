import React, { useContext } from 'react'
import FormContext from '../store/form-context'

function Checkbox (props) {
  const { selectedAnswer } = useContext(FormContext)
  const checkboxHandler = event => {
    selectedAnswer(props, event.target.checked)
  }

  return (
    <div className={props.changedAnswer.id === 0 ? 'p-4 mt-4' : 'p-4'}>
      <label className='inline-flex items-center'>
        <input
          name={`answer-${props.changedAnswer.id}`}
          type='checkbox'
          className='text-indigo-500 w-6 h-6 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded'
          checked={props.changedAnswer.checked}
          onChange={checkboxHandler}
        />
        <span className='ml-2 text-white text-xl '>
          {props.changedAnswer.text}
        </span>
      </label>
    </div>
  )
}

export default Checkbox
