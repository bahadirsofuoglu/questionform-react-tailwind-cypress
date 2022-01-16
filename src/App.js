import Form from './components/Form'
import React from 'react'
import { FormContextProvider } from './store/form-context'

function App () {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <FormContextProvider>
        <Form></Form>
      </FormContextProvider>
    </div>
  )
}

export default App
