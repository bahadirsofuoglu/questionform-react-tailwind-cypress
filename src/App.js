import './App.css'
import Form from './components/Form'
function App () {
  const questions = [
    {
      question: 'selam',
      answers: ['abi', 'saka', 'bu']
    },
    {
      question: 'asd',
      answers: ['asdf', 'saaska', 'dsfa']
    }
  ]
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Form questions={questions}></Form>
    </div>
  )
}

export default App
