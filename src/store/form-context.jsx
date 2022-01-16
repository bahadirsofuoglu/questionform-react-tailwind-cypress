import React, { createContext, useState } from 'react'
import { items } from './items'

const FormContext = createContext()

export const FormContextProvider = props => {
  const [questions, setQuestions] = useState(items)

  const checkedItem = () => {
    const newTodo = {
      id: new Date().toISOString(),
      text: 'asdsa'
    }

    setQuestions(prevTodos => {
      return prevTodos.concat(newTodo)
    })
  }

  const contextValue = {
    questions: questions,
    checkedItem: checkedItem
  }

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContext
