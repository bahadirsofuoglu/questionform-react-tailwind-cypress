import React from 'react'
import Form from './components/Form'
import { FormContextProvider } from './store/form-context'
function App () {
  return (
    <FormContextProvider>
      <div className='flex justify-center items-center h-screen w-screen'>
        <Form></Form>
      </div>
    </FormContextProvider>
  )
}

export default App
