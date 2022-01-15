import React from 'react'

function Navbar (props) {
  return (
    <div className='flex flex-col bg-cyan-200'>
      <div className='flex justify-end w-full'>
        <span>3 / 5 </span>
      </div>
      <div>
        <label class='inline-flex items-center'>
          <input type='checkbox' class='w-6 h-6 rounded' checked />
          <span class='ml-2'>Rounded checkbox</span>
        </label>
      </div>
      <div>
        <p>asdasdifj dsaipfjas asmdfasşodf asdf sadf asdf</p>
      </div>
    </div>
  )
}

export default Navbar
