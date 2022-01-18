import React, { createContext, useState, useEffect } from 'react'
import { items } from './items'

const FormContext = createContext()

export const FormContextProvider = props => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    setQuestions(items)
  }, [])

  const selectedAnswer = (data, checked) => {
    const { questionId, changedAnswer } = data

    const newQuestions = questions.map(question => {
      question.answer = changedAnswer
      if (question.id === questionId) {
        question.answers.map(answer => {
          if (answer.id === changedAnswer.id) {
            answer.checked = checked
          } else {
            answer.checked = false
          }
          return answer
        })
      }
      return question
    })

    setQuestions([...newQuestions])
  }

  const contextValue = {
    questions: questions,
    selectedAnswer: selectedAnswer
  }

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContext
