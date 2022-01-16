import React from 'react'

function Checkbox (props) {
  const checkboxHandler = event => {
    props.selectedAnswer(props, event.target.checked)
  }
  return (
    <div>
      <label className='inline-flex items-center'>
        <input
          type='checkbox'
          className='w-6 h-6 rounded'
          checked={props.checked}
          onChange={checkboxHandler}
        />
        <span className='ml-2'>{props.text}</span>
      </label>
    </div>
  )
}

export default Checkbox
